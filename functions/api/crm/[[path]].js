// API panelu CRM – dostępne tylko po zalogowaniu przez Cloudflare Access.
//   GET    /api/crm/me                 – kto jest zalogowany
//   GET    /api/crm/orders?status=&q=  – lista zamówień
//   GET    /api/crm/orders/:id         – szczegóły
//   POST   /api/crm/orders             – dodaj zamówienie ręcznie
//   PATCH  /api/crm/orders/:id         – zmień status, cenę, notatki, dane klienta
//   DELETE /api/crm/orders/:id         – usuń zamówienie (np. testowe)
//   GET    /api/crm/export.csv         – eksport do CSV (Excel)
import { verifyAccess } from '../../../lib/access.js';
import { json, STATUSES, PACKAGES, cleanText, isEmail, orderNumber } from '../../../lib/orders.js';

const LIST_COLS = 'id, number, created_at, updated_at, status, source, lang, name, company, email, phone, package, price_range, agreed_price';

function parsePrice(v) {
  if (v === null || v === '' || v === undefined) return null;
  const n = Math.round(Number(String(v).replace(/\s/g, '').replace(',', '.')));
  if (!Number.isFinite(n) || n < 0 || n > 1000000) throw new Error('price');
  return n;
}

const csvCell = (v) => {
  let s = v === null || v === undefined ? '' : String(v);
  if (/^[=+\-@\t\r]/.test(s) && !/^\+?[\d\s()-]+$/.test(s)) s = "'" + s; // ochrona przed formułami w Excelu (numery telefonów zostają)
  return '"' + s.replace(/"/g, '""') + '"';
};

export async function handle(request, env, path, user = {}) {
  const method = request.method;
  const url = new URL(request.url);

  if (path === 'me' && method === 'GET') return json({ ok: true, email: user.email || null });

  if (path === 'orders' && method === 'GET') {
    const status = url.searchParams.get('status') || '';
    const q = cleanText(url.searchParams.get('q') || '', 100);
    let sql = `SELECT ${LIST_COLS} FROM orders WHERE 1=1`;
    const args = [];
    if (status && STATUSES.includes(status)) { sql += ' AND status = ?'; args.push(status); }
    if (q) {
      sql += ' AND (number LIKE ? OR name LIKE ? OR company LIKE ? OR email LIKE ? OR phone LIKE ?)';
      const like = `%${q}%`; args.push(like, like, like, like, like);
    }
    sql += ' ORDER BY id DESC LIMIT 1000';
    const { results } = await env.DB.prepare(sql).bind(...args).all();
    return json({ ok: true, orders: results, statuses: STATUSES, packages: PACKAGES });
  }

  if (path === 'orders' && method === 'POST') {
    let b; try { b = await request.json(); } catch { return json({ ok: false, error: 'bad-json' }, 400); }
    const name = cleanText(b.name, 120);
    if (name.length < 2) return json({ ok: false, error: 'name' }, 422);
    const email = cleanText(b.email, 254);
    if (email && !isEmail(email)) return json({ ok: false, error: 'email' }, 422);
    const pkg = b.package in PACKAGES ? b.package : null;
    let price; try { price = parsePrice(b.agreed_price); } catch { return json({ ok: false, error: 'price' }, 422); }
    const status = STATUSES.includes(b.status) ? b.status : 'nowe';
    const ins = await env.DB.prepare(
      `INSERT INTO orders (status, source, lang, name, company, email, phone, package, price_range, agreed_price, notes, data)
       VALUES (?, 'recznie', 'pl', ?, ?, ?, ?, ?, ?, ?, ?, '{}')`
    ).bind(status, name, cleanText(b.company, 200) || null, email || null, cleanText(b.phone, 30) || null,
      pkg, pkg ? PACKAGES[pkg] : null, price, cleanText(b.notes, 10000) || null).run();
    const id = ins.meta.last_row_id;
    const number = orderNumber(id);
    await env.DB.prepare('UPDATE orders SET number = ? WHERE id = ?').bind(number, id).run();
    return json({ ok: true, id, number }, 201);
  }

  if (path === 'export.csv' && method === 'GET') {
    const { results } = await env.DB.prepare(`SELECT ${LIST_COLS}, notes FROM orders ORDER BY id`).all();
    const cols = ['number', 'created_at', 'status', 'source', 'name', 'company', 'email', 'phone', 'package', 'price_range', 'agreed_price', 'notes'];
    const head = ['Numer', 'Data', 'Status', 'Źródło', 'Klient', 'Firma', 'E-mail', 'Telefon', 'Pakiet', 'Widełki', 'Uzgodniona cena (zł)', 'Notatki'];
    const lines = [head.map(csvCell).join(';'), ...results.map((r) => cols.map((c) => csvCell(r[c])).join(';'))];
    return new Response('﻿' + lines.join('\r\n'), {
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': `attachment; filename="zamowienia-${new Date().toISOString().slice(0, 10)}.csv"`,
        'Cache-Control': 'no-store',
      },
    });
  }

  const m = path.match(/^orders\/(\d+)$/);
  if (m) {
    const id = Number(m[1]);
    if (method === 'GET') {
      const row = await env.DB.prepare('SELECT * FROM orders WHERE id = ?').bind(id).first();
      if (!row) return json({ ok: false, error: 'not-found' }, 404);
      delete row.ip_hash;
      try { row.data = JSON.parse(row.data || '{}'); } catch { row.data = {}; }
      return json({ ok: true, order: row });
    }
    if (method === 'PATCH') {
      let b; try { b = await request.json(); } catch { return json({ ok: false, error: 'bad-json' }, 400); }
      const sets = []; const args = [];
      if ('status' in b) { if (!STATUSES.includes(b.status)) return json({ ok: false, error: 'status' }, 422); sets.push('status = ?'); args.push(b.status); }
      if ('agreed_price' in b) { try { args.push(parsePrice(b.agreed_price)); } catch { return json({ ok: false, error: 'price' }, 422); } sets.push('agreed_price = ?'); }
      if ('notes' in b) { sets.push('notes = ?'); args.push(cleanText(b.notes, 10000) || null); }
      if ('name' in b) { const n = cleanText(b.name, 120); if (n.length < 2) return json({ ok: false, error: 'name' }, 422); sets.push('name = ?'); args.push(n); }
      if ('company' in b) { sets.push('company = ?'); args.push(cleanText(b.company, 200) || null); }
      if ('email' in b) { const e = cleanText(b.email, 254); if (e && !isEmail(e)) return json({ ok: false, error: 'email' }, 422); sets.push('email = ?'); args.push(e || null); }
      if ('phone' in b) { sets.push('phone = ?'); args.push(cleanText(b.phone, 30) || null); }
      if ('package' in b) { const p = b.package in PACKAGES ? b.package : null; sets.push('package = ?', 'price_range = ?'); args.push(p, p ? PACKAGES[p] : null); }
      if (!sets.length) return json({ ok: false, error: 'nothing' }, 400);
      sets.push("updated_at = strftime('%Y-%m-%dT%H:%M:%SZ','now')");
      const r = await env.DB.prepare(`UPDATE orders SET ${sets.join(', ')} WHERE id = ?`).bind(...args, id).run();
      if (!r.meta.changes) return json({ ok: false, error: 'not-found' }, 404);
      return json({ ok: true });
    }
    if (method === 'DELETE') {
      const r = await env.DB.prepare('DELETE FROM orders WHERE id = ?').bind(id).run();
      if (!r.meta.changes) return json({ ok: false, error: 'not-found' }, 404);
      return json({ ok: true });
    }
  }

  return json({ ok: false, error: 'not-found' }, 404);
}

export async function onRequest({ request, env, params }) {
  const auth = await verifyAccess(request, env);
  if (!auth.ok) return json({ ok: false, error: 'unauthorized', reason: auth.reason }, 401);
  if (!env.DB) return json({ ok: false, error: 'no-db' }, 503);
  // Ochrona przed wywołaniem zmian z obcych stron
  if (request.method !== 'GET') {
    const origin = request.headers.get('Origin');
    if (origin && new URL(origin).host !== new URL(request.url).host) return json({ ok: false, error: 'origin' }, 403);
  }
  const path = (Array.isArray(params.path) ? params.path : [params.path || '']).join('/');
  try {
    return await handle(request, env, path, auth);
  } catch (e) {
    return json({ ok: false, error: 'server' }, 500);
  }
}
