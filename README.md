# Mateusz Ryś – Strony internetowe

Strona wizytówka mojej działalności: tworzenie stron internetowych dla firm.
Wersja polska i angielska, formularz zamówienia, cennik, portfolio, polityka prywatności.

## Co jest w repozytorium

| Plik / folder | Co to jest |
|---|---|
| `index.html` | Strona główna (cały wygląd, teksty PL/EN i formularz w jednym pliku) |
| `polityka-prywatnosci.html` | Polityka prywatności (PL/EN) |
| `fonts/` | Czcionki Sora i Inter – ładowane z własnego serwera, bez Google Fonts |
| `en/index.html` | Angielska wersja strony głównej – **tworzona automatycznie** z `index.html` (patrz niżej) |
| `strona-promocyjna.html`, `strona-wizytowka.html`, `odswiezenie-strony.html` | Podstrony usług – **tworzone automatycznie** |
| `blog/` | Poradnik (artykuły) – **tworzony automatycznie** |
| `podstrony.css` | Wygląd podstron usług i poradnika |
| `favicon.ico` | Ikonka dla starszych przeglądarek i robotów |
| `narzedzia/generuj_en.py`, `narzedzia/generuj_podstrony.py` | Skrypty tworzące wersję EN, podstrony usług i poradnik |
| `realizacje/` | Portfolio: strona BMW M4 (`m4.html`) i jej zrzuty ekranu |
| `404.html` | Strona „nie znaleziono” (PL/EN) – hosting pokazuje ją sam przy złym adresie |
| `_headers` | Nagłówki bezpieczeństwa dla Cloudflare Pages (tworzony automatycznie, patrz niżej) |
| `robots.txt`, `sitemap.xml` | Informacje dla Google: co indeksować i jakie są podstrony |
| `llms.txt` | Opis firmy dla ChatGPT, Claude, Perplexity i innych AI |
| `a5075557595f4e6cb22cefcf03d4913b.txt` | Klucz IndexNow – pozwala szybko zgłaszać zmiany do Binga i innych wyszukiwarek. Nie usuwać. |
| `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png`, `icon-512.png` | Ikonki strony (karta przeglądarki, telefon, Google) |
| `og-image.jpg` | Obrazek, który pokazuje się przy udostępnieniu linku na Facebooku itp. (1200×630) |
| `narzedzia/aktualizuj_naglowki.py` | Skrypt, który tworzy plik `_headers` |
| `STAN-STRONY.md` | Raport: co jest zrobione, co zostało (aktualizowany po każdej sesji) |

Strona nie wymaga budowania – to zwykłe pliki HTML. Wystarczy je wgrać na hosting.

## Gdzie stoi strona

- Domena: **mateuszrys.pl** – kupiona w OVHcloud (konto: mateuszrys1805@gmail.com), ważna do 18.11.2027,
  odnawianie co rok, blokada transferu włączona. Serwery DNS: Cloudflare (nola / trevor.ns.cloudflare.com).
- Hosting: **Cloudflare Pages**, projekt `mateuszrys` → https://mateuszrys.pages.dev
- Statystyki odwiedzin: Cloudflare Web Analytics (bez cookies) – panel Cloudflare → Pages → mateuszrys → Metrics.
- Google Search Console: usługa „mateuszrys.pl” (domena), weryfikacja rekordem TXT w Cloudflare – **nie usuwać** tego rekordu.
- Bing Webmaster Tools: mateuszrys.pl zaimportowane z Google Search Console (20.11.2026). Bing zasila też DuckDuckGo, Yahoo, Ecosia i wyszukiwanie w ChatGPT.
- Przekierowania: Cloudflare → mateuszrys.pl → Rules → „Redirect from WWW to root” oraz SSL/TLS → Always Use HTTPS.
- DNSSEC: włączony w Cloudflare (DNS → Settings), rekord DS dodany w OVH (zakładka „Rekordy DS”).
  Przy zmianie serwerów DNS w przyszłości najpierw usunąć rekord DS w OVH, inaczej domena przestanie działać.
- Poczta: rekordy MX/SPF OVH zachowane w Cloudflare (pakiet Zimbra Starter w OVH).

## Jak wdrażać zmiany

Zmiana trafia na gałąź `main` → Cloudflare Pages sam buduje i publikuje stronę (ok. 1 minuty).
Zmiany robimy na osobnej gałęzi, a potem scalamy do `main`.
Jeśli coś się zepsuje: Cloudflare → Pages → mateuszrys → Deployments → przy poprzedniej wersji „Rollback”.

## Formularz

Zgłoszenia trafiają na e-mail przez usługę FormSubmit (formsubmit.co).
Przy pierwszym zgłoszeniu FormSubmit wysyła mail z prośbą o aktywację – trzeba ją kliknąć.

Zabezpieczenia w przeglądarce (index.html):
- ukryte pole-pułapka `_honey` – boty je wypełniają, ludzie go nie widzą; wtedy nic nie jest wysyłane,
- wysłanie szybciej niż 4 s po otwarciu strony jest traktowane jak bot,
- jedno zgłoszenie na minutę z tej samej przeglądarki,
- adres odbiorcy nie jest wpisany wprost w kodzie formularza.

Formularz wysyła na losowy alias FormSubmit (stała `FORM_ENDPOINT` w `index.html`), aktywowany dla mateuszrys.pl.
Jeśli zmieni się domena, FormSubmit przyśle nowy mail aktywacyjny – trzeba kliknąć „Activate Form”.
Po podłączeniu Cloudflare: ochrona Turnstile i limit wysyłek po stronie serwera.

## Wersja angielska, podstrony usług i poradnik

- Język strony wynika z adresu: `/` to wersja polska, `/en/` angielska. Przycisk PL/EN przenosi między nimi.
- `en/index.html` **nie edytuj ręcznie**. Po każdej zmianie `index.html` uruchom:

      python narzedzia/generuj_en.py
      python narzedzia/aktualizuj_naglowki.py

  Nowe teksty dopisz do słownika `EN` w `index.html` – skrypt wypisze te, których brakuje.
- Treść podstron usług i artykułów jest w `narzedzia/generuj_podstrony.py`. Po zmianie: `python narzedzia/generuj_podstrony.py`.
  Nowy artykuł: dopisz go do listy `ART`, dodaj stronę w `PAGES` i adres w `sitemap.xml` oraz `llms.txt`.

## Nagłówki bezpieczeństwa (`_headers`)

Plik `_headers` mówi przeglądarce, co strona może robić (np. że wolno uruchamiać tylko jej własne skrypty).
Skrypty są rozpoznawane po „odcisku”, więc **po każdej zmianie skryptu w plikach .html** trzeba uruchomić:

    python narzedzia/aktualizuj_naglowki.py

i wysłać nowy `_headers` razem ze zmianą. Bez tego zmieniony skrypt przestanie działać na stronie.
Sprawdzenie po wdrożeniu: securityheaders.com i developer.mozilla.org/observatory.

## Sekrety

Na razie strona **nie używa żadnych kluczy ani haseł**.
Jeśli pojawią się (np. klucz do wysyłki maili), trafiają TYLKO do:
GitHub → repozytorium → Settings → Secrets and variables → Actions
albo do panelu hostingu. W kodzie wyłącznie nazwa zmiennej.

| Nazwa sekretu | Do czego | Gdzie ustawiony |
|---|---|---|
| (brak) | | |

## Kopie zapasowe

- Całe repozytorium na GitHubie to kopia strony – każda zmiana jest zapisana w historii.
- Raz w miesiącu: GitHub → **Code** → **Download ZIP** i zapis na dysku lub w chmurze.
- Strona nie ma bazy danych ani wgrywanych plików, więc nic więcej nie trzeba kopiować.
- Zgłoszenia z formularza są tylko w Gmailu – nie kasować ich, dopóki trwa rozmowa z klientem.

## Gdy strona przestanie działać

1. Sprawdź, czy strona otwiera się na telefonie (inna sieć niż Wi‑Fi).
2. Zaloguj się do panelu hostingu i sprawdź ostatnie wdrożenie.
3. Cofnij ostatnią zmianę: GitHub → zakładka **Commits** → wybierz ostatnią działającą wersję.
4. Jeśli to nie pomoże: pobierz ostatni ZIP z dysku i wgraj go ponownie do repozytorium.
5. Kontakt: Marcin Dutkiewicz (mentor).

## Struktura (od 20.11.2026)
- `/` – strona główna ze sceną 3D (BMW, tablica MATEUSZRYS.PL). Źródła: `zrodla/strona-glowna` (instrukcja w `JAK-ZBUDOWAC.md`).
- `/oferta` (`oferta.html`) – dawna strona główna: oferta, cennik, o mnie, formularz zamówienia. Wersja EN `/en/` generowana z `oferta.html` (`narzedzia/generuj_en.py`).

## CRM (zamówienia)
- Formularz na `/oferta` zapisuje zamówienie przez `functions/api/zamowienie.js` w bazie Cloudflare D1 `crm` (wiązanie `DB`) i dostaje numer `MR-RRRR-NNNN`.
- Potem FormSubmit wysyła mail do Mateusza (numer w temacie) i potwierdzenie do klienta (`_autoresponse`).
- Panel: `https://mateuszrys.pl/crm` – logowanie Cloudflare Access (kod z maila, tylko mateuszrys1805@gmail.com).
  API panelu `functions/api/crm/[[path]].js` dodatkowo sprawdza token Access (`lib/access.js`, zmienne ACCESS_TEAM_DOMAIN, ACCESS_AUD, ACCESS_ALLOWED_EMAIL).
- Schemat bazy: `migrations/0001_crm.sql`.
