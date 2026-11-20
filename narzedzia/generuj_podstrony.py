#!/usr/bin/env python3
"""Tworzy podstrony usług i poradnika (blog) ze wspólnym nagłówkiem, stopką i danymi dla Google.

Treść każdej podstrony jest w słowniku PAGES poniżej. Po zmianie treści uruchom:

    python narzedzia/generuj_podstrony.py

Skrypt nadpisze pliki: strona-promocyjna.html, strona-wizytowka.html, odswiezenie-strony.html,
blog/index.html i blog/*.html. Podstrony nie mają skryptów, więc nie trzeba aktualizować _headers.
"""
import html, json, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
SITE = 'https://mateuszrys.pl'
PERSON = {"@type": "Person", "name": "Mateusz Ryś", "url": SITE + "/"}
PROVIDER = {"@type": "ProfessionalService", "name": "Mateusz Ryś – Strony internetowe", "url": SITE + "/",
            "telephone": "+48797414907", "areaServed": "PL"}
PUBLISHED = "2026-11-20"

SERVICES = [
    ("/strona-promocyjna", "Strona promocyjna", "799 zł – jedna strona pod jedną usługę lub promocję"),
    ("/strona-wizytowka", "Strona wizytówka", "1490 zł – profesjonalna strona firmy, do 5 podstron"),
    ("/odswiezenie-strony", "Odświeżenie strony", "od 990 zł – nowy wygląd starej strony"),
]


def esc(s):
    return html.escape(s, quote=True)


def faq_html(faq):
    items = ''.join(f'<details><summary>{esc(q)}</summary><p>{a}</p></details>' for q, a in faq)
    return f'<section class="faq"><h2>Częste pytania</h2>{items}</section>'


def faq_ld(faq):
    import re
    strip = lambda s: re.sub(r'<[^>]+>', '', s)
    return {"@context": "https://schema.org", "@type": "FAQPage",
            "mainEntity": [{"@type": "Question", "name": q,
                            "acceptedAnswer": {"@type": "Answer", "text": html.unescape(strip(a))}} for q, a in faq]}


def crumbs_ld(items):
    return {"@context": "https://schema.org", "@type": "BreadcrumbList",
            "itemListElement": [{"@type": "ListItem", "position": i + 1, "name": n, "item": SITE + u}
                                for i, (u, n) in enumerate(items)]}


def page(path, title, desc, body, ld, crumbs, current=None, og_type="website"):
    url = SITE + path
    up = '../' if path.startswith('/blog/') else ''
    lds = ''.join('<script type="application/ld+json">\n' + json.dumps(x, ensure_ascii=False, indent=1) + '\n</script>\n'
                  for x in ld + [crumbs_ld(crumbs)])
    crumb_html = '<span>›</span>'.join(
        (f'<a href="{u}">{esc(n)}</a>' if i < len(crumbs) - 1 else f'<b>{esc(n)}</b>') for i, (u, n) in enumerate(crumbs))
    cur = lambda key: ' aria-current="page"' if current == key else ''
    services = ' · '.join(f'<a href="{u}">{n}</a>' for u, n, _ in SERVICES)
    return f'''<!DOCTYPE html>
<html lang="pl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{esc(title)}</title>
<meta name="description" content="{esc(desc)}">
<link rel="canonical" href="{url}">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="icon" href="/favicon-32.png" type="image/png" sizes="32x32">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<meta name="theme-color" content="#0b0d17">
<meta property="og:type" content="{og_type}">
<meta property="og:locale" content="pl_PL">
<meta property="og:site_name" content="Mateusz Ryś – Strony internetowe">
<meta property="og:title" content="{esc(title)}">
<meta property="og:description" content="{esc(desc)}">
<meta property="og:url" content="{url}">
<meta property="og:image" content="{SITE}/og-image.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<link rel="stylesheet" href="/fonts/fonts.css">
<link rel="stylesheet" href="/podstrony.css">
{lds}</head>
<body>
<header class="top"><div class="wrap wide top-in">
  <a href="/" class="logo"><span class="logo-mark">MR</span><span>Mateusz Ryś <small>Strony internetowe</small></span></a>
  <nav class="top-links" aria-label="Menu">
    <a href="/oferta#oferta">Oferta</a>
    <a href="/oferta#cennik"{cur('cennik')}>Cennik</a>
    <a href="/oferta#realizacje">Realizacje</a>
    <a href="/blog/"{cur('blog')}>Poradnik</a>
    <a href="/oferta#zamow" class="btn btn-primary">Zamów stronę</a>
  </nav>
</div></header>
<main class="wrap">
<nav class="crumbs" aria-label="Okruszki">{crumb_html}</nav>
{body}
<section class="cta">
  <h2>Porozmawiajmy o Twojej stronie</h2>
  <p>Opisz swój pomysł w formularzu – odezwę się z wyceną, zanim zaczniemy pracę.</p>
  <div class="btns"><a href="/oferta#zamow" class="btn btn-primary">Opisz swoją stronę →</a><a href="tel:+48797414907" class="btn btn-ghost">Zadzwoń: 797 414 907</a></div>
</section>
</main>
<footer><div class="wrap wide foot">
  <nav aria-label="Usługi">{services} · <a href="/blog/">Poradnik</a> · <a href="/oferta#realizacje">Realizacje</a></nav>
  <div>© 2026 Mateusz Ryś – Strony internetowe · <a href="tel:+48797414907">797 414 907</a> · <a href="mailto:mateuszrys1805@gmail.com">mateuszrys1805@gmail.com</a> · <a href="/polityka-prywatnosci">Polityka prywatności</a></div>
</div></footer>
</body>
</html>
'''


def service_page(path, name, price, title, desc, lead, body, faq, from_price=False):
    offer = {"@context": "https://schema.org", "@type": "Service", "name": name, "serviceType": "Tworzenie stron internetowych",
             "description": desc, "url": SITE + path, "provider": PROVIDER, "areaServed": "PL",
             "offers": ({"@type": "Offer", "priceCurrency": "PLN",
                         "priceSpecification": {"@type": "PriceSpecification", "minPrice": price, "priceCurrency": "PLN"}}
                        if from_price else {"@type": "Offer", "price": price, "priceCurrency": "PLN"})}
    others = ''.join(f'<a class="card" href="{u}"><b>{n}</b><span>{d}</span></a>' for u, n, d in SERVICES if u != path)
    content = f'''<article>
<div class="hero">
  <span class="tag">Usługa</span>
  <h1>{name}</h1>
  <p class="lead">{lead}</p>
  <div class="price-box">
    <div><div class="amount">{'<small>od</small> ' if from_price else ''}{price} <small>zł</small></div><p>Cena końcowa – nie doliczam VAT. Nie obejmuje hostingu ani domeny: stronę publikujesz sam albo zlecasz to mnie (+149 zł).</p></div>
    <a href="/oferta#zamow" class="btn btn-primary">Zamów – {name.lower()}</a>
  </div>
</div>
<div class="prose">
{body}
<h2>Jak wygląda współpraca</h2>
<ol class="steps">
<li><strong>Opisujesz pomysł</strong> – wypełniasz formularz: dane firmy, logo, inspiracje i kolory.</li>
<li><strong>Kontakt i wycena</strong> – odzywam się, omawiamy szczegóły i ustalamy ostateczną cenę.</li>
<li><strong>Projekt i realizacja</strong> – tworzę stronę, pokazuję Ci podgląd i wprowadzam poprawki.</li>
<li><strong>Odbiór strony</strong> – dostajesz gotowe pliki. Stronę publikujesz sam u wybranego dostawcy albo zlecasz to mnie za 149 zł.</li>
</ol>
{faq_html(faq)}
<h2>Inne usługi</h2>
<div class="cards">{others}</div>
</div>
</article>'''
    return page(path, title, desc, content, [offer, faq_ld(faq)], [("/", "Strona główna"), (path, name)], current='cennik')


def article_page(slug, title, h1, desc, lead, body, faq=None, related=()):
    path = f'/blog/{slug}'
    art = {"@context": "https://schema.org", "@type": "Article", "headline": h1, "description": desc,
           "datePublished": PUBLISHED, "dateModified": PUBLISHED, "author": PERSON, "publisher": PERSON,
           "inLanguage": "pl", "mainEntityOfPage": SITE + path, "image": SITE + "/og-image.jpg"}
    rel = ''.join(f'<a class="card" href="/blog/{s}"><b>{esc(t)}</b><span>Poradnik</span></a>' for s, t in related)
    content = f'''<article>
<div class="hero">
  <span class="tag">Poradnik</span>
  <h1>{h1}</h1>
  <p class="lead">{lead}</p>
  <p class="meta">Mateusz Ryś · {PUBLISHED[8:10]}.{PUBLISHED[5:7]}.{PUBLISHED[:4]}</p>
</div>
<div class="prose">
{body}
{faq_html(faq) if faq else ''}
{('<h2>Przeczytaj też</h2><div class="cards">' + rel + '</div>') if rel else ''}
</div>
</article>'''
    ld = [art] + ([faq_ld(faq)] if faq else [])
    return page(path, title, desc, content, ld, [("/", "Strona główna"), ("/blog/", "Poradnik"), (path, h1)],
                current='blog', og_type="article")


# ---------------------------------------------------------------- USŁUGI
WSPOLNE = '''<li>Indywidualny projekt – bez gotowych, oklepanych szablonów</li>
<li>Dopasowanie do telefonu, tabletu i komputera</li>
<li>Lekki, szybki kod</li>'''

PAGES = {}

PAGES['strona-promocyjna.html'] = service_page(
    '/strona-promocyjna', 'Strona promocyjna', 799,
    'Strona promocyjna (landing page) za 799 zł – Mateusz Ryś',
    'Strona promocyjna (landing page) dla firm za 799 zł, cena końcowa bez VAT: jedna przewijana strona pod konkretną usługę, promocję lub wydarzenie. Indywidualny projekt, wersja na telefon, 2 rundy poprawek.',
    'Jedna krótka, przewijana strona pod konkretną usługę, promocję lub wydarzenie. Skupiona na jednym celu: żeby klient zadzwonił, zapisał się albo kupił.',
    f'''<h2>Dla kogo jest strona promocyjna?</h2>
<p>Strona promocyjna – często nazywana <em>landing page</em> – to dobry wybór, gdy chcesz wypromować <strong>jedną rzecz</strong>, a nie całą firmę. Na przykład:</p>
<ul>
<li>nową usługę lub produkt,</li>
<li>sezonową promocję, wyprzedaż albo ofertę świąteczną,</li>
<li>wydarzenie, warsztaty, kurs albo otwarcie lokalu,</li>
<li>kampanię reklamową na Facebooku, Instagramie lub w Google – reklama prowadzi wtedy na stronę, która mówi dokładnie o tym, co było w reklamie.</li>
</ul>
<p>Jeśli potrzebujesz strony, która przedstawi całą firmę – z ofertą, galerią i informacjami o Tobie – lepiej sprawdzi się <a href="/strona-wizytowka">strona wizytówka</a>.</p>
<h2>Co dostajesz</h2>
<ul class="checks">
<li>Jednostronicowy, przewijany projekt</li>
<li>Stronę skupioną na jednym celu – telefon, zapis albo zakup</li>
<li>Wyraźne przyciski kontaktu</li>
<li>2 rundy poprawek w cenie</li>
{WSPOLNE}
<li>Gotowe pliki strony do samodzielnej publikacji</li>
</ul>
<h2>Dlaczego jedna strona działa lepiej niż cała witryna?</h2>
<p>Klient, który trafia na stronę z reklamy, ma mało czasu i jedną konkretną potrzebę. Strona promocyjna nie rozprasza go menu i podstronami – prowadzi go od nagłówka, przez najważniejsze korzyści, do jednego przycisku. Dzięki temu łatwiej zamienić odwiedzających w telefony i zapytania.</p>''',
    [("Czym różni się strona promocyjna od strony wizytówki?", "Strona promocyjna mówi o jednej rzeczy – usłudze, promocji albo wydarzeniu – i prowadzi do jednego działania. Strona wizytówka przedstawia całą firmę: ofertę, informacje o firmie, galerię i kontakt. Więcej przeczytasz w artykule <a href=\"/blog/strona-wizytowka-czy-promocyjna\">Strona wizytówka czy strona promocyjna – co wybrać?</a>"),
     ("Ile kosztuje strona promocyjna?", "799 zł. To cena końcowa – nie doliczam VAT. W cenie są 2 rundy poprawek. Cena nie obejmuje domeny i hostingu; publikację strony możesz zlecić mnie za 149 zł."),
     ("Czy umieszczasz stronę w internecie?", "Mogę. Po zakończeniu pracy dostajesz gotowe pliki strony i możesz opublikować ją sam u wybranego dostawcy albo zlecić to mnie za 149 zł – pomogę założyć domenę i hosting i uruchomię stronę. Opłaty za domenę i hosting płacisz bezpośrednio dostawcy."),
     ("Nie mam tekstów ani zdjęć – czy to problem?", "Nie. Zaznacz to w formularzu – pomogę przygotować treści i dobrać odpowiednie zdjęcia."),
     ("Czy mogę zgłaszać poprawki?", "Tak. Pokazuję podgląd strony w trakcie pracy, a w cenie strony promocyjnej są 2 rundy poprawek.")])

PAGES['strona-wizytowka.html'] = service_page(
    '/strona-wizytowka', 'Strona wizytówka', 1490,
    'Strona wizytówka dla firmy za 1490 zł – Mateusz Ryś',
    'Strona wizytówka dla firmy za 1490 zł, cena końcowa bez VAT: do 5 podstron z indywidualnym projektem, wersja na telefon, optymalizacja pod Google i założenie Wizytówki Google.',
    'Profesjonalna strona Twojej firmy: kim jesteś, co oferujesz i jak się z Tobą skontaktować. Najczęściej wybierana usługa – idealna dla firm, które chcą dobrze wyglądać w internecie.',
    f'''<h2>Dla kogo jest strona wizytówka?</h2>
<p>Strona wizytówka to podstawowa strona internetowa firmy. Sprawdzi się, jeśli:</p>
<ul>
<li>dopiero zaczynasz działalność i potrzebujesz miejsca, do którego możesz kierować klientów,</li>
<li>masz tylko profil na Facebooku lub w Google i chcesz wyglądać bardziej profesjonalnie,</li>
<li>prowadzisz lokalny biznes – usługi, gabinet, warsztat, salon, restaurację – i klienci szukają Cię w Google,</li>
<li>chcesz, żeby klient w kilka sekund zobaczył Twoją ofertę i mógł od razu zadzwonić lub napisać.</li>
</ul>
<h2>Co dostajesz</h2>
<ul class="checks">
<li>Do 5 podstron z indywidualnym projektem – kolorystyka, logo i styl dopasowane do Twojej marki</li>
<li>Sekcje: o firmie, oferta, galeria, kontakt</li>
<li>Dopasowanie do telefonu, tabletu i komputera</li>
<li>Linki do mediów społecznościowych i klikalny kontakt – telefon, e-mail, formularz</li>
<li>Podstawową optymalizację pod wyszukiwarkę Google – tytuły, opisy, nagłówki i struktura strony</li>
<li>Założenie Wizytówki Google – Twoja firma na mapach Google</li>
<li>Poprawki do pełnego zadowolenia</li>
<li>Gotowe pliki strony do samodzielnej publikacji</li>
</ul>
<h2>Ile to trwa?</h2>
<p>Zazwyczaj od kilku dni do dwóch tygodni – zależy od ilości treści i tego, jak szybko dostanę od Ciebie materiały. Jeśli nie masz tekstów ani zdjęć, pomogę je przygotować.</p>
<h2>Potrzebujesz więcej podstron?</h2>
<p>Wizytówka mieści do 5 podstron. Jeśli potrzebujesz więcej, możesz dokupić dodatkową podstronę za 199 zł albo wybrać <strong>stronę firmową</strong> – do 8 podstron, od 2490 zł. Na życzenie przygotuję też teksty na stronę (od 299 zł) i wersję angielską (+30%).</p>
<div class="note">Zanim wypełnisz formularz, zajrzyj do listy <a href="/blog/co-przygotowac-przed-zamowieniem-strony">co przygotować przed zamówieniem strony</a> – dzięki niej szybciej dostaniesz wycenę i gotową stronę.</div>''',
    [("Ile kosztuje strona wizytówka?", "1490 zł – to cena końcowa, nie doliczam VAT. W cenie jest do 5 podstron i założenie Wizytówki Google. Cena nie obejmuje hostingu ani domeny; publikację możesz zlecić mnie za 149 zł."),
     ("Ile trwa wykonanie strony wizytówki?", "Zazwyczaj od kilku dni do dwóch tygodni – zależy od ilości treści i tego, jak szybko dostanę od Ciebie materiały."),
     ("Czy strona będzie widoczna w Google?", "Strona dostaje podstawową optymalizację pod Google: odpowiednie tytuły, opisy, nagłówki i strukturę, a w cenie zakładam też Wizytówkę Google, dzięki której firma pojawia się na mapach. Pozycja w wynikach zależy jednak także od konkurencji, treści i czasu."),
     ("Czy umieszczasz stronę w internecie?", "Mogę. Po zakończeniu pracy dostajesz gotowe pliki strony i możesz opublikować ją sam u wybranego dostawcy albo zlecić to mnie za 149 zł – pomogę założyć domenę i hosting i uruchomię stronę. Opłaty za domenę i hosting płacisz bezpośrednio dostawcy."),
     ("Czy strona będzie działać na telefonie?", "Tak, każda strona jest dopasowana do różnych ekranów – wygląda dobrze na telefonie, tablecie i komputerze.")])

PAGES['odswiezenie-strony.html'] = service_page(
    '/odswiezenie-strony', 'Odświeżenie strony', 990,
    'Odświeżenie starej strony internetowej od 990 zł – Mateusz Ryś',
    'Odświeżenie strony internetowej od 990 zł, cena końcowa bez VAT: nowy, nowoczesny wygląd, dostosowanie do telefonów, uporządkowanie treści, szybsze ładowanie i lepsza widoczność w Google.',
    'Masz starą, przestarzałą stronę? Nadam jej nowoczesny wygląd, dopasuję ją do telefonów i uporządkuję treści – tak, żeby znów przyciągała klientów.',
    '''<h2>Kiedy warto odświeżyć stronę?</h2>
<p>Strona internetowa starzeje się szybciej, niż się wydaje. Warto ją odświeżyć, jeśli:</p>
<ul>
<li>na telefonie trzeba ją powiększać palcami, a przyciski są za małe,</li>
<li>wygląda tak samo jak kilka lat temu i odstaje od konkurencji,</li>
<li>długo się ładuje,</li>
<li>ma nieaktualne informacje, ceny albo zdjęcia,</li>
<li>klienci dzwonią z pytaniami, na które strona powinna odpowiadać.</li>
</ul>
<p>Ponad połowa klientów wchodzi na strony ze smartfona. Strona, która źle działa na telefonie, traci ich, zanim zdążą przeczytać ofertę.</p>
<h2>Co dostajesz</h2>
<ul class="checks">
<li>Nowy, nowoczesny wygląd strony</li>
<li>Dostosowanie do telefonów i tabletów</li>
<li>Przeniesienie i uporządkowanie treści</li>
<li>Szybsze ładowanie i lepszą widoczność w Google</li>
<li>Gotowe pliki strony do samodzielnej publikacji</li>
</ul>
<h2>Odświeżenie czy nowa strona?</h2>
<p>Przy odświeżeniu korzystamy z tego, co już masz – treści, zdjęć, struktury – i nadajemy temu nowy wygląd. Jeśli stara strona ma niewiele treści albo chcesz zupełnie zmienić sposób, w jaki przedstawiasz firmę, czasem lepiej wybrać nową <a href="/strona-wizytowka">stronę wizytówkę</a>. W formularzu podaj adres obecnej strony – podpowiem, co będzie korzystniejsze.</p>''',
    [("Ile kosztuje odświeżenie strony?", "Od 990 zł (cena końcowa, bez VAT). Ostateczna cena zależy od tego, ile treści trzeba przenieść i uporządkować oraz ile podstron ma mieć nowa strona. Dokładną wycenę podaję przed rozpoczęciem pracy."),
     ("Czy moje treści i zdjęcia zostaną?", "Tak – przenoszę i porządkuję treści z obecnej strony. Jeśli coś jest nieaktualne, możemy to przy okazji poprawić."),
     ("Czy umieszczasz nową wersję w internecie?", "Mogę. Dostajesz gotowe pliki strony – publikujesz ją sam albo zlecasz to mnie za 149 zł. Opłaty za domenę i hosting płacisz bezpośrednio dostawcy."),
     ("Czy strona będzie działać na telefonie?", "Tak, odświeżona strona jest dopasowana do telefonów, tabletów i komputerów.")],
    from_price=True)

# ---------------------------------------------------------------- PORADNIK
ART = [
    ("ile-kosztuje-strona-internetowa", "Ile kosztuje strona internetowa dla firmy w 2026 roku?"),
    ("strona-wizytowka-czy-promocyjna", "Strona wizytówka czy strona promocyjna – co wybrać?"),
    ("co-przygotowac-przed-zamowieniem-strony", "Co przygotować przed zamówieniem strony internetowej?"),
]
rel = lambda s: [a for a in ART if a[0] != s]

PAGES['blog/ile-kosztuje-strona-internetowa.html'] = article_page(
    ART[0][0], 'Ile kosztuje strona internetowa dla firmy w 2026? Ceny i co na nie wpływa',
    ART[0][1],
    'Ile kosztuje strona internetowa dla firmy w 2026 roku: od czego zależy cena, co jest w cenie, o jakich kosztach stałych pamiętać i jakie są moje ceny – od 799 zł, bez VAT.',
    'Krótko: u mnie strona promocyjna kosztuje 799 zł, strona wizytówka 1490 zł, strona firmowa od 2490 zł, a odświeżenie starej strony od 990 zł – to ceny końcowe, bez VAT. Poniżej wyjaśniam, od czego zależy cena i o jakich kosztach warto pamiętać.',
    '''<h2>Od czego zależy cena strony internetowej?</h2>
<p>Pytanie „ile kosztuje strona” przypomina pytanie „ile kosztuje samochód” – zależy, czego potrzebujesz. Na cenę najbardziej wpływają:</p>
<ul>
<li><strong>Liczba sekcji i podstron</strong> – jedna przewijana strona to mniej pracy niż kilka podstron z ofertą, galerią i kontaktem.</li>
<li><strong>Ilość treści</strong> – im więcej tekstów, zdjęć i usług do opisania, tym więcej czasu na ich ułożenie.</li>
<li><strong>Galerie i dodatkowe elementy</strong> – np. galeria realizacji, cennik, mapa, animacje.</li>
<li><strong>Projekt graficzny</strong> – strona robiona od zera pod Twoją markę kosztuje więcej niż wypełnienie gotowego szablonu, ale wyróżnia Cię na tle konkurencji.</li>
<li><strong>Materiały</strong> – jeśli masz gotowe teksty, logo i zdjęcia, praca idzie szybciej.</li>
</ul>
<h2>Moje ceny</h2>
<div class="table-scroll"><table>
<tr><th>Usługa</th><th>Cena</th><th>Dla kogo</th></tr>
<tr><td><a href="/strona-promocyjna">Strona promocyjna</a></td><td>799 zł</td><td>Jedna strona pod konkretną usługę, promocję lub wydarzenie</td></tr>
<tr><td><a href="/strona-wizytowka">Strona wizytówka</a></td><td>1490 zł</td><td>Firmy, które chcą profesjonalnie zaistnieć w internecie – do 5 podstron</td></tr>
<tr><td>Strona firmowa</td><td>od 2490 zł</td><td>Większe firmy – do 8 podstron</td></tr>
<tr><td><a href="/odswiezenie-strony">Odświeżenie strony</a></td><td>od 990 zł</td><td>Właściciele starych, przestarzałych stron</td></tr>
</table></div>
<p><strong>Wszystkie ceny są cenami końcowymi – nie doliczam VAT.</strong> Dokładną wycenę podaję po zapoznaniu się z formularzem, <strong>zanim zaczniemy pracę</strong>, więc nie ma niespodzianek.</p>
<h3>Dodatki</h3>
<ul>
<li>dodatkowa podstrona – 199 zł,</li>
<li>publikacja strony (pomoc z domeną i hostingiem, uruchomienie strony) – 149 zł,</li>
<li>teksty na stronę – od 299 zł,</li>
<li>wersja angielska – +30%,</li>
<li>opieka nad stroną – od 79 zł miesięcznie.</li>
</ul>
<h2>Co jest w cenie, a czego w niej nie ma?</h2>
<p>W cenie jest projekt, wykonanie strony, dopasowanie do telefonów, poprawki i gotowe pliki strony. W cenie <strong>nie ma hostingu ani domeny</strong> – opłacasz je bezpośrednio u wybranego dostawcy. Dzięki temu strona i adres należą do Ciebie, a nie do wykonawcy. Stronę możesz opublikować sam albo zlecić to mnie za 149 zł.</p>
<h2>O jakich kosztach stałych pamiętać?</h2>
<ul>
<li><strong>Domena</strong> (np. twojafirma.pl) – opłacana co roku u rejestratora. Uważaj na promocje „za 1 zł na pierwszy rok” – sprawdź cenę odnowienia.</li>
<li><strong>Hosting</strong> – miejsce na serwerze, gdzie stoi strona. Dla prostej strony z plikami HTML wystarczą tanie, a często nawet darmowe usługi hostingu stron statycznych.</li>
<li><strong>Zmiany w przyszłości</strong> – nowe ceny, zdjęcia czy usługi. U mnie możesz wykupić opiekę nad stroną od 79 zł miesięcznie.</li>
</ul>
<h2>Kreator, szablon czy strona na zamówienie?</h2>
<p>Kreatory stron (np. Wix) i gotowe szablony są tańsze na start, ale zwykle wymagają comiesięcznej opłaty, a strona wygląda podobnie do tysięcy innych. Strona robiona od zera kosztuje jednorazowo więcej, ale jest dopasowana do Twojej firmy, lekka i szybka. Jeśli strona ma przyciągać klientów, a nie tylko „być”, indywidualny projekt zwykle szybciej się zwraca.</p>''',
    [("Ile kosztuje najtańsza strona internetowa dla firmy?", "U mnie najtańsza jest strona promocyjna – 799 zł (cena końcowa, bez VAT). To jedna przewijana strona pod konkretną usługę lub promocję."),
     ("Czy do ceny doliczasz VAT?", "Nie. Wszystkie ceny są cenami końcowymi."),
     ("Czy cena obejmuje domenę i hosting?", "Nie. Domenę i hosting opłacasz bezpośrednio u wybranego dostawcy – dzięki temu strona i adres należą do Ciebie. Publikację strony możesz zlecić mnie za 149 zł."),
     ("Kiedy poznam dokładną cenę?", "Po wypełnieniu formularza i krótkiej rozmowie – zawsze przed rozpoczęciem pracy.")],
    rel(ART[0][0]))

PAGES['blog/strona-wizytowka-czy-promocyjna.html'] = article_page(
    ART[1][0], 'Strona wizytówka czy strona promocyjna (landing page) – co wybrać?',
    ART[1][1],
    'Strona wizytówka czy strona promocyjna (landing page)? Porównanie: do czego służą, co zawierają, ile kosztują i którą wybrać dla swojej firmy.',
    'Obie to strony internetowe dla firm, ale służą do czegoś innego. Wizytówka przedstawia całą firmę, a strona promocyjna sprzedaje jedną konkretną rzecz. Oto jak wybrać.',
    '''<h2>Najważniejsze różnice</h2>
<div class="table-scroll"><table>
<tr><th></th><th><a href="/strona-wizytowka">Strona wizytówka</a></th><th><a href="/strona-promocyjna">Strona promocyjna</a></th></tr>
<tr><td>Cel</td><td>Przedstawić całą firmę</td><td>Jedno działanie: telefon, zapis, zakup</td></tr>
<tr><td>Zawartość</td><td>O firmie, oferta, galeria, kontakt</td><td>Jedna usługa, promocja lub wydarzenie</td></tr>
<tr><td>Jak klient na nią trafia</td><td>Google, wizytówka w Mapach, polecenia</td><td>Reklama, post, kampania, ulotka z kodem QR</td></tr>
<tr><td>Jak długo jest aktualna</td><td>Długo – to stały adres firmy</td><td>Często na czas kampanii lub sezonu</td></tr>
<tr><td>Cena u mnie</td><td>1490 zł (do 5 podstron)</td><td>799 zł</td></tr>
</table></div>
<h2>Wybierz stronę wizytówkę, jeśli…</h2>
<ul>
<li>nie masz jeszcze żadnej strony firmy,</li>
<li>chcesz, żeby klienci znajdowali Cię w Google po nazwie firmy i rodzaju usług,</li>
<li>oferujesz kilka usług i chcesz pokazać je wszystkie,</li>
<li>chcesz budować zaufanie – zdjęcia, informacje o Tobie, realizacje.</li>
</ul>
<h2>Wybierz stronę promocyjną, jeśli…</h2>
<ul>
<li>masz już stronę firmy, ale chcesz wypromować jedną nową usługę lub ofertę,</li>
<li>planujesz reklamy na Facebooku, Instagramie albo w Google,</li>
<li>organizujesz wydarzenie, kurs albo sezonową promocję,</li>
<li>chcesz szybko i taniej sprawdzić, czy jest zainteresowanie nowym pomysłem.</li>
</ul>
<h2>A może jedno i drugie?</h2>
<p>Wiele firm zaczyna od strony wizytówki, a potem do konkretnych kampanii dokłada strony promocyjne. Wizytówka buduje obecność firmy w internecie, a strony promocyjne zamieniają ruch z reklam w zapytania. Jeśli nie masz jeszcze żadnej strony – zacznij od wizytówki.</p>
<p>Nie wiesz, co wybrać? Opisz swój pomysł w <a href="/oferta#zamow">formularzu</a> – podpowiem, co będzie lepsze dla Twojej firmy.</p>''',
    [("Czy strona promocyjna to to samo co landing page?", "Tak. Landing page (strona docelowa) to angielska nazwa strony promocyjnej – jednej strony skupionej na jednym celu, na którą zwykle prowadzi reklama."),
     ("Co jest tańsze – wizytówka czy strona promocyjna?", "Strona promocyjna: u mnie kosztuje 799 zł, a strona wizytówka 1490 zł. To ceny końcowe, bez VAT.")],
    rel(ART[1][0]))

PAGES['blog/co-przygotowac-przed-zamowieniem-strony.html'] = article_page(
    ART[2][0], 'Co przygotować przed zamówieniem strony internetowej? Lista kontrolna',
    ART[2][1],
    'Lista rzeczy, które warto przygotować przed zamówieniem strony internetowej dla firmy: dane firmy, logo, teksty, zdjęcia, inspiracje, kolory, domena i hosting.',
    'Im lepiej przygotujesz się przed zamówieniem strony, tym szybciej dostaniesz dokładną wycenę i gotową stronę. Oto lista rzeczy, o które i tak zapytam w formularzu.',
    '''<h2>1. Podstawowe dane firmy</h2>
<ul class="checks">
<li>Nazwa firmy, branża i obszar działania (miasto, region, cała Polska)</li>
<li>Telefon, e-mail i adres, jeśli klienci mają do Ciebie przyjeżdżać</li>
<li>Linki do profili w mediach społecznościowych i do wizytówki w Google</li>
</ul>
<h2>2. Oferta i cel strony</h2>
<ul class="checks">
<li>Lista usług lub produktów, które chcesz pokazać</li>
<li>Najważniejszy cel strony – żeby klient zadzwonił, napisał, zapisał się czy kupił</li>
<li>Kim są Twoi klienci i czym wyróżniasz się na tle konkurencji</li>
</ul>
<p>Na tej podstawie dobierzemy rodzaj strony – <a href="/strona-wizytowka">wizytówkę</a> albo <a href="/strona-promocyjna">stronę promocyjną</a>.</p>
<h2>3. Logo, kolory i styl</h2>
<ul class="checks">
<li>Logo w dobrej jakości (najlepiej plik wektorowy, np. SVG lub PDF)</li>
<li>Kolory firmowe – albo informacja, że decyzję zostawiasz mnie</li>
</ul>
<p>Nie masz logo? Zaznacz to w formularzu.</p>
<h2>4. Inspiracje</h2>
<p>Znajdź 2–3 strony, które Ci się podobają – nie muszą być z Twojej branży. Napisz, co dokładnie Ci się w nich podoba (kolory, układ, zdjęcia, prostota) i czego chcesz uniknąć. To najszybszy sposób, żebym zrozumiał Twój gust.</p>
<h2>5. Teksty i zdjęcia</h2>
<ul class="checks">
<li>Krótki opis firmy – kim jesteś, od kiedy działasz, co robisz</li>
<li>Opisy usług</li>
<li>Zdjęcia: Twoje, zespołu, lokalu, realizacji, produktów</li>
</ul>
<div class="note">Nie masz tekstów ani zdjęć? To nie problem – zaznacz to w formularzu, a pomogę przygotować treści i dobrać odpowiednie zdjęcia. Mogę też napisać teksty na stronę (od 299 zł).</div>
<h2>6. Domena i hosting</h2>
<p>Warto wcześniej pomyśleć o adresie strony (domenie). Jeśli masz już domenę albo starą stronę – podaj jej adres w formularzu. Nie wiesz, jak założyć domenę i hosting? Publikację strony możesz zlecić mnie za 149 zł. Więcej o kosztach przeczytasz w artykule <a href="/blog/ile-kosztuje-strona-internetowa">Ile kosztuje strona internetowa</a>.</p>
<h2>Gotowe? Wypełnij formularz</h2>
<p>Nie musisz mieć wszystkiego – wystarczy opis pomysłu. Resztę uzupełnimy w rozmowie. <a href="/oferta#zamow">Przejdź do formularza</a>.</p>''',
    None, rel(ART[2][0]))

blog_cards = ''.join(f'<a class="card" href="/blog/{s}"><b>{esc(t)}</b><span>Czytaj →</span></a>' for s, t in ART)
PAGES['blog/index.html'] = page(
    '/blog/', 'Poradnik o stronach internetowych dla firm – Mateusz Ryś',
    'Poradnik o stronach internetowych dla firm: ile kosztuje strona, strona wizytówka czy promocyjna, co przygotować przed zamówieniem.',
    f'''<div class="hero"><span class="tag">Poradnik</span><h1>Poradnik o stronach internetowych dla firm</h1>
<p class="lead">Konkretne odpowiedzi na pytania, które najczęściej słyszę od klientów – zanim zamówią stronę.</p></div>
<div class="prose"><div class="cards">{blog_cards}</div>
<h2>Usługi</h2><div class="cards">{''.join(f'<a class="card" href="{u}"><b>{n}</b><span>{d}</span></a>' for u, n, d in SERVICES)}</div></div>''',
    [{"@context": "https://schema.org", "@type": "Blog", "name": "Poradnik – Mateusz Ryś", "url": SITE + "/blog/",
      "author": PERSON, "blogPost": [{"@type": "BlogPosting", "headline": t, "url": f"{SITE}/blog/{s}"} for s, t in ART]}],
    [("/", "Strona główna"), ("/blog/", "Poradnik")], current='blog')

if __name__ == '__main__':
    for name, content in PAGES.items():
        p = ROOT / name
        p.parent.mkdir(exist_ok=True)
        p.write_text(content, encoding='utf-8')
        print('Zapisano', name)
