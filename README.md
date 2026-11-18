# Mateusz Ryś – Strony internetowe

Strona wizytówka mojej działalności: tworzenie stron internetowych dla firm.
Wersja polska i angielska, formularz zamówienia, cennik, portfolio, polityka prywatności.

## Co jest w repozytorium

| Plik / folder | Co to jest |
|---|---|
| `index.html` | Strona główna (cały wygląd, teksty PL/EN i formularz w jednym pliku) |
| `polityka-prywatnosci.html` | Polityka prywatności (PL/EN) |
| `fonts/` | Czcionki Sora i Inter – ładowane z własnego serwera, bez Google Fonts |
| `realizacje/` | Portfolio: strona BMW M4 (`m4.html`) i jej zrzuty ekranu |
| `404.html` | Strona „nie znaleziono” (PL/EN) – hosting pokazuje ją sam przy złym adresie |
| `_headers` | Nagłówki bezpieczeństwa dla Cloudflare Pages (tworzony automatycznie, patrz niżej) |
| `robots.txt`, `sitemap.xml` | Informacje dla Google: co indeksować i jakie są podstrony |
| `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png`, `icon-512.png` | Ikonki strony (karta przeglądarki, telefon, Google) |
| `og-image.jpg` | Obrazek, który pokazuje się przy udostępnieniu linku na Facebooku itp. (1200×630) |
| `narzedzia/aktualizuj_naglowki.py` | Skrypt, który tworzy plik `_headers` |
| `STAN-STRONY.md` | Raport: co jest zrobione, co zostało (aktualizowany po każdej sesji) |

Strona nie wymaga budowania – to zwykłe pliki HTML. Wystarczy je wgrać na hosting.

## Gdzie stoi strona

- Domena: **jeszcze nie kupiona** (propozycja: mateuszrys.pl)
- Hosting: **jeszcze nie wybrany** (propozycja: Cloudflare Pages)
- Podgląd roboczy: claude.ai (tylko do testów, nie dla klientów)

## Jak wdrażać zmiany

Docelowo: zmiana trafia na gałąź `main` → hosting sam aktualizuje stronę.
(Uzupełnić po podłączeniu hostingu w etapie 3.)

## Formularz

Zgłoszenia trafiają na e-mail przez usługę FormSubmit (formsubmit.co).
Przy pierwszym zgłoszeniu FormSubmit wysyła mail z prośbą o aktywację – trzeba ją kliknąć.

Zabezpieczenia w przeglądarce (index.html):
- ukryte pole-pułapka `_honey` – boty je wypełniają, ludzie go nie widzą; wtedy nic nie jest wysyłane,
- wysłanie szybciej niż 4 s po otwarciu strony jest traktowane jak bot,
- jedno zgłoszenie na minutę z tej samej przeglądarki,
- adres odbiorcy nie jest wpisany wprost w kodzie formularza.

Do zrobienia po aktywacji FormSubmit: w mailu aktywacyjnym jest losowy alias formularza –
wpisać go w `index.html` zamiast składanego adresu (stała `EMAIL`), wtedy adres całkiem znika z kodu.
Po podłączeniu Cloudflare: ochrona Turnstile i limit wysyłek po stronie serwera.

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
