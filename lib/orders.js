// Wspólne funkcje zamówień: statusy, pakiety, walidacja, numeracja.

export const STATUSES = ['nowe', 'kontakt', 'wycena', 'zaakceptowane', 'realizacja', 'oddane', 'oplacone', 'odrzucone'];

export const PACKAGES = {
  'Strona promocyjna': '799 zł',
  'Strona wizytówka': '1490 zł',
  'Strona firmowa': 'od 2490 zł',
  'Odświeżenie strony': 'od 990 zł',
  'Indywidualna wycena': 'wycena indywidualna',
  'Nie wiem – doradź': 'do ustalenia',
};

// Pola formularza (nazwy jak w oferta.html) → kolumny bazy
export const FIELD_MAP = {
  'Imię i nazwisko': 'name',
  'Nazwa firmy': 'company',
  'email': 'email',
  'Telefon': 'phone',
  'Pakiet': 'package',
};

const MAX_FIELD = 5000;
const MAX_FIELDS = 60;

export const json = (obj, status = 200, extra = {}) =>
  new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', ...extra },
  });

export function cleanText(v, max = MAX_FIELD) {
  return String(v ?? '').replace(/\u0000/g, '').trim().slice(0, max);
}

export function isEmail(v) {
  return /^[^\s@]{1,64}@[^\s@]{1,190}\.[^\s@]{2,24}$/.test(v);
}

export function isPhone(v) {
  return String(v).replace(/\D/g, '').length >= 9 && String(v).length <= 30;
}

// Sprawdza dane z formularza; zwraca { ok, errors, row, data }
export function validateOrder(fields, lang) {
  const errors = [];
  if (!fields || typeof fields !== 'object' || Array.isArray(fields)) return { ok: false, errors: ['fields'] };
  const keys = Object.keys(fields);
  if (keys.length > MAX_FIELDS) return { ok: false, errors: ['too-many-fields'] };

  const data = {};
  for (const k of keys) {
    const key = cleanText(k, 80);
    if (!key || key.startsWith('_')) continue;
    data[key] = cleanText(fields[k]);
  }

  const name = data['Imię i nazwisko'] || '';
  const email = data['email'] || '';
  const phone = data['Telefon'] || '';
  if (name.length < 2 || name.length > 120) errors.push('name');
  if (!isEmail(email)) errors.push('email');
  if (!isPhone(phone)) errors.push('phone');
  if (!(data['Opis działalności'] || '').trim()) errors.push('business');
  if (!(data['Opis strony'] || '').trim()) errors.push('website');

  let pkg = data['Pakiet'] || '';
  if (pkg && !(pkg in PACKAGES)) pkg = 'Nie wiem – doradź';

  const row = {
    name: name.slice(0, 120),
    company: (data['Nazwa firmy'] || '').slice(0, 200) || null,
    email: email.slice(0, 254),
    phone: phone.slice(0, 30),
    package: pkg || null,
    price_range: pkg ? PACKAGES[pkg] : null,
    lang: lang === 'en' ? 'en' : 'pl',
  };
  return { ok: errors.length === 0, errors, row, data };
}

export function orderNumber(id, date = new Date()) {
  return `MR-${date.getUTCFullYear()}-${String(id).padStart(4, '0')}`;
}

export async function sha256Hex(text) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('');
}
