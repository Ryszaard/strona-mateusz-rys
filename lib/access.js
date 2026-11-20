// Sprawdzanie, czy żądanie przeszło przez Cloudflare Access (logowanie do CRM).
// Cloudflare Access dodaje do żądania podpisany token (JWT) w nagłówku Cf-Access-Jwt-Assertion.
// Tu sprawdzamy podpis tokenu kluczami Cloudflare, ważność i to, czy token jest dla naszej aplikacji (AUD).
// Konfiguracja (zmienne w Cloudflare Pages → Settings → Variables, to NIE są sekrety):
//   ACCESS_TEAM_DOMAIN – np. mateuszrys.cloudflareaccess.com
//   ACCESS_AUD         – „Application Audience (AUD) Tag” z ustawień aplikacji w Cloudflare Access
//   ACCESS_ALLOWED_EMAIL – adres, który może wejść do CRM
// Bez tych zmiennych dostęp jest zawsze zablokowany.

let certCache = { at: 0, keys: null, team: null };

function b64urlToBytes(s) {
  s = s.replace(/-/g, '+').replace(/_/g, '/');
  while (s.length % 4) s += '=';
  const bin = atob(s);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}
const b64urlJson = (s) => JSON.parse(new TextDecoder().decode(b64urlToBytes(s)));

async function getKeys(team) {
  const now = Date.now();
  if (certCache.keys && certCache.team === team && now - certCache.at < 10 * 60 * 1000) return certCache.keys;
  const res = await fetch(`https://${team}/cdn-cgi/access/certs`);
  if (!res.ok) throw new Error('certs ' + res.status);
  const { keys } = await res.json();
  certCache = { at: now, keys, team };
  return keys;
}

export async function verifyAccess(request, env) {
  const team = (env.ACCESS_TEAM_DOMAIN || '').trim();
  const aud = (env.ACCESS_AUD || '').trim();
  const allowed = (env.ACCESS_ALLOWED_EMAIL || '').trim().toLowerCase();
  if (!team || !aud || !allowed) return { ok: false, reason: 'not-configured' };

  const token = request.headers.get('Cf-Access-Jwt-Assertion');
  if (!token) return { ok: false, reason: 'no-token' };
  const parts = token.split('.');
  if (parts.length !== 3) return { ok: false, reason: 'bad-token' };

  let header, payload;
  try { header = b64urlJson(parts[0]); payload = b64urlJson(parts[1]); } catch { return { ok: false, reason: 'bad-token' }; }
  if (header.alg !== 'RS256') return { ok: false, reason: 'bad-alg' };

  let keys;
  try { keys = await getKeys(team); } catch { return { ok: false, reason: 'certs' }; }
  const jwk = keys.find((k) => k.kid === header.kid);
  if (!jwk) return { ok: false, reason: 'unknown-key' };

  const key = await crypto.subtle.importKey('jwk', jwk, { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' }, false, ['verify']);
  const valid = await crypto.subtle.verify(
    'RSASSA-PKCS1-v1_5', key, b64urlToBytes(parts[2]), new TextEncoder().encode(parts[0] + '.' + parts[1])
  );
  if (!valid) return { ok: false, reason: 'bad-signature' };

  const now = Math.floor(Date.now() / 1000);
  const auds = Array.isArray(payload.aud) ? payload.aud : [payload.aud];
  if (!auds.includes(aud)) return { ok: false, reason: 'bad-aud' };
  if (!payload.exp || payload.exp < now - 30) return { ok: false, reason: 'expired' };
  if (payload.iss && payload.iss !== `https://${team}`) return { ok: false, reason: 'bad-iss' };
  const email = String(payload.email || '').toLowerCase();
  if (email !== allowed) return { ok: false, reason: 'not-allowed' };

  return { ok: true, email };
}
