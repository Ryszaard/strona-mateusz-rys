#!/usr/bin/env python3
"""Tworzy angielską wersję strony z ofertą (oferta.html): en/index.html.

Bierze index.html i tłumaczy teksty słownikiem EN, który jest w skrypcie w index.html
(ten sam, którego używa przełącznik PL/EN). Dzięki temu Google widzi wersję angielską
pod osobnym adresem https://mateuszrys.pl/en/.

Po KAŻDEJ zmianie oferta.html uruchom kolejno:

    python narzedzia/generuj_en.py
    python narzedzia/aktualizuj_naglowki.py

Nowy tekst na stronie dopisz też do słownika EN w oferta.html – inaczej w wersji EN zostanie po polsku.
"""
import json, pathlib, re
from bs4 import BeautifulSoup, NavigableString, Comment

ROOT = pathlib.Path(__file__).resolve().parent.parent
SITE = 'https://mateuszrys.pl'
src = (ROOT / 'oferta.html').read_text(encoding='utf-8')

m = re.search(r'const EN = (\{.*?\n  \});', src, re.S)
EN = json.loads(re.sub(r'(?m)^\s*//.*$', '', m.group(1)))
norm = lambda s: re.sub(r'\s+', ' ', s).strip()


def tr(raw):
    n = norm(raw)
    if not n or n not in EN:
        return raw
    lead, trail = re.match(r'^\s*', raw).group(0), re.search(r'\s*$', raw).group(0)
    return lead + EN[n] + trail


soup = BeautifulSoup(src, 'html.parser')

# 1. Teksty na stronie (pomijamy skrypty, style, pola tekstowe i elementy z data-no-i18n)
for node in soup.body.find_all(string=True):
    if isinstance(node, Comment) or node.parent.name in ('script', 'style', 'textarea'):
        continue
    if node.find_parent(attrs={'data-no-i18n': True}):
        continue
    new = tr(str(node))
    if new != str(node):
        node.replace_with(NavigableString(new))

# 2. Atrybuty (tak jak robi to przełącznik języka)
for el in soup.body.find_all(True):
    if el.find_parent(attrs={'data-no-i18n': True}) or el.has_attr('data-no-i18n'):
        continue
    for a in ('placeholder', 'alt', 'aria-label'):
        if el.has_attr(a) and norm(el[a]) in EN:
            el['data-pl-' + a] = el[a]
            el[a] = EN[norm(el[a])]

# 3. Względne adresy → od katalogu głównego (strona leży w /en/)
def absolutize(u):
    if not u or re.match(r'^(#|/|[a-z]+:|data:)', u, re.I):
        return u
    return '/' + u
for el in soup.find_all(True):
    for a in ('href', 'src', 'data-local', 'poster'):
        if el.has_attr(a):
            el[a] = absolutize(el[a])
    if el.has_attr('srcset'):
        el['srcset'] = ', '.join(' '.join([absolutize(p.split()[0])] + p.split()[1:]) for p in el['srcset'].split(','))

# 4. Nagłówek dokumentu
soup.html['lang'] = 'en'
title_pl = 'Mateusz Ryś – Strony internetowe'
soup.title.string = 'Mateusz Ryś – Websites for businesses | Web design from 799 PLN'
md = soup.find('meta', attrs={'name': 'description'})
md['data-pl'] = md['content']
md['content'] = EN[md['content']]
soup.find('link', rel='canonical')['href'] = SITE + '/en/'
og = lambda p: soup.find('meta', property=p)
og('og:locale')['content'] = 'en_GB'
og('og:locale:alternate')['content'] = 'pl_PL'
og('og:url')['content'] = SITE + '/en/'
og('og:site_name')['content'] = 'Mateusz Ryś – Websites'
og('og:title')['content'] = 'Mateusz Ryś – Websites for businesses'
og('og:description')['content'] = 'Modern websites for businesses. Custom design, mobile-friendly, prices from 799 PLN.'
og('og:image:alt')['content'] = 'Mateusz Ryś – Websites. A website that sells your business for you.'

# 5. Dane strukturalne: FAQ po angielsku, opis firmy po angielsku
for s in soup.find_all('script', type='application/ld+json'):
    data = json.loads(s.string)
    if data.get('@type') == 'FAQPage':
        for q in data['mainEntity']:
            q['name'] = EN.get(q['name'], q['name'])
            q['acceptedAnswer']['text'] = EN.get(q['acceptedAnswer']['text'], q['acceptedAnswer']['text'])
        data['inLanguage'] = 'en'
    elif data.get('@type') == 'ProfessionalService':
        data['url'] = SITE + '/en/'
        data['name'] = 'Mateusz Ryś – Websites'
        data['description'] = 'Website design and development for businesses: promo pages, business card websites and refreshes of old websites.'
        for o in data.get('makesOffer', []):
            o['name'] = EN.get(o['name'], o['name'])
    s.string = '\n' + json.dumps(data, ensure_ascii=False, indent=2) + '\n'

out = str(soup)
(ROOT / 'en').mkdir(exist_ok=True)
(ROOT / 'en' / 'index.html').write_text(out, encoding='utf-8')

# Kontrola: polskie teksty, które zostały bez tłumaczenia
left = set()
for node in BeautifulSoup(out, 'html.parser').body.find_all(string=True):
    if node.parent.name in ('script', 'style', 'textarea') or isinstance(node, Comment):
        continue
    if node.find_parent(attrs={'data-no-i18n': True}):
        continue
    t = norm(str(node))
    if re.search(r'[ąćęłńóśźżĄĆĘŁŃÓŚŹŻ]', t):
        left.add(t)
print('Zapisano en/index.html')
if left:
    print('Bez tłumaczenia (dopisz do słownika EN w oferta.html):')
    for t in sorted(left):
        print(' -', t[:120])
