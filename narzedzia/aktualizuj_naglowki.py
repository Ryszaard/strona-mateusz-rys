#!/usr/bin/env python3
"""Tworzy plik _headers (nagłówki bezpieczeństwa dla Cloudflare Pages).

Polityka CSP pozwala uruchamiać tylko te skrypty, które są w plikach strony.
Każdy skrypt jest rozpoznawany po swoim „odcisku” (hash SHA-256), więc po
KAŻDEJ zmianie skryptu w plikach .html trzeba uruchomić ten plik ponownie:

    python narzedzia/aktualizuj_naglowki.py

Bez tego zmieniony skrypt zostanie zablokowany przez przeglądarkę.
"""
import base64, hashlib, pathlib, re

ROOT = pathlib.Path(__file__).resolve().parent.parent
SCRIPT_RE = re.compile(r'<script(?P<attrs>[^>]*)>(?P<body>.*?)</script>', re.S | re.I)

hashes = set()
for page in sorted(ROOT.rglob('*.html')):
    if 'node_modules' in page.parts:
        continue
    html = page.read_text(encoding='utf-8')
    for m in SCRIPT_RE.finditer(html):
        attrs = m.group('attrs').lower()
        if 'src=' in attrs or 'application/ld+json' in attrs:
            continue  # zewnętrzne pliki i dane strukturalne nie potrzebują odcisku
        digest = hashlib.sha256(m.group('body').encode('utf-8')).digest()
        hashes.add("'sha256-" + base64.b64encode(digest).decode() + "'")

csp = '; '.join([
    "default-src 'self'",
    "script-src 'self' https://static.cloudflareinsights.com " + ' '.join(sorted(hashes)),
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob:",
    "font-src 'self' data:",
    "connect-src 'self' https://formsubmit.co https://cloudflareinsights.com",
    "form-action 'self' https://formsubmit.co",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "object-src 'none'",
    "upgrade-insecure-requests",
])

headers = f"""# Plik tworzony automatycznie przez narzedzia/aktualizuj_naglowki.py – nie edytuj ręcznie.
/*
  Strict-Transport-Security: max-age=31536000; includeSubDomains
  Content-Security-Policy: {csp}
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=(), usb=()
  Cross-Origin-Opener-Policy: same-origin

/fonts/*
  Cache-Control: public, max-age=31536000, immutable

/crm
  Cache-Control: no-store
  X-Robots-Tag: noindex, nofollow

/crm/*
  Cache-Control: no-store
  X-Robots-Tag: noindex, nofollow
"""
(ROOT / '_headers').write_text(headers, encoding='utf-8')
print(f'Zapisano _headers ({len(hashes)} skryptów).')
