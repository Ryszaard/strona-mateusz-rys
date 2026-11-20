// POST /api/zamowienie – zapisuje zamówienie z formularza w bazie CRM i zwraca numer zamówienia.
// Mail do Mateusza i potwierdzenie dla klienta wysyła potem strona przez FormSubmit (z tym numerem).
import { json, validateOrder, orderNumber, sha256Hex } from '../../lib/orders.js';

const ALLOWED_ORIGINS = ['https://mateuszrys.pl', 'https://www.mateuszrys.pl', 'https://mateuszrys.pages.dev'];
const MAX_BODY = 64 * 1024;
const LIMIT_PER_10_MIN = 3;

export async function onRequestPost({ request, env }) {
  // Tylko z naszej strony (ochrona przed wysyłaniem z innych stron)
  const origin = request.headers.get('Origin') || '';
  const okOrigin = ALLOWED_ORIGINS.includes(origin) || /^https:\/\/[a-z0-9-]+\.mateuszrys\.pages\.dev$/.test(origin);
  if (!okOrigin) return json({ ok: false, error: 'origin' }, 403);

  const len = Number(request.headers.get('Content-Length') || 0);
  if (len > MAX_BODY) return json({ ok: false, error: 'too-large' }, 413);

  let body;
  try {
    const text = await request.text();
    if (text.length > MAX_BODY) return json({ ok: false, error: 'too-large' }, 413);
    body = JSON.parse(text);
  } catch {
    return json({ ok: false, error: 'bad-json' }, 400);
  }

  // Pułapka na boty: ukryte pole wypełnione albo formularz wysłany w mniej niż 4 sekundy
  if (body.hp || Number(body.elapsed) < 4000) return json({ ok: true, number: null });

  const v = validateOrder(body.fields, body.lang);
  if (!v.ok) return json({ ok: false, error: 'validation', fields: v.errors }, 422);

  if (!env.DB) return json({ ok: false, error: 'no-db' }, 503);

  // Limit wysyłek: maks. 3 zamówienia na 10 minut z jednego adresu IP (IP zapisujemy tylko jako skrót)
  const ip = request.headers.get('CF-Connecting-IP') || '';
  const day = new Date().toISOString().slice(0, 10);
  const ipHash = ip ? (await sha256Hex(`mr-crm|${day}|${ip}`)).slice(0, 32) : null;
  if (ipHash) {
    const since = new Date(Date.now() - 10 * 60 * 1000).toISOString().replace(/\.\d{3}Z$/, 'Z');
    const { results } = await env.DB.prepare('SELECT COUNT(*) AS n FROM orders WHERE ip_hash = ? AND created_at >= ?')
      .bind(ipHash, since).all();
    if ((results?.[0]?.n || 0) >= LIMIT_PER_10_MIN) return json({ ok: false, error: 'rate-limit' }, 429);
  }

  const r = v.row;
  const ins = await env.DB.prepare(
    `INSERT INTO orders (status, source, lang, name, company, email, phone, package, price_range, data, ip_hash)
     VALUES ('nowe', 'formularz', ?, ?, ?, ?, ?, ?, ?, ?, ?)`
  ).bind(r.lang, r.name, r.company, r.email, r.phone, r.package, r.price_range, JSON.stringify(v.data), ipHash).run();

  const id = ins.meta.last_row_id;
  const number = orderNumber(id);
  await env.DB.prepare('UPDATE orders SET number = ? WHERE id = ?').bind(number, id).run();

  return json({ ok: true, number });
}

export const onRequest = () => json({ ok: false, error: 'method' }, 405, { Allow: 'POST' });
