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
Do zmiany w etapie 4 (ochrona przed spamem, ukrycie adresu e-mail).

## Sekrety

Na razie strona **nie używa żadnych kluczy ani haseł**.
Jeśli pojawią się (np. klucz do wysyłki maili), trafiają TYLKO do:
GitHub → repozytorium → Settings → Secrets and variables → Actions
albo do panelu hostingu. W kodzie wyłącznie nazwa zmiennej.

| Nazwa sekretu | Do czego | Gdzie ustawiony |
|---|---|---|
| (brak) | | |

## Gdy strona przestanie działać

1. Sprawdź, czy strona otwiera się na telefonie (inna sieć niż Wi‑Fi).
2. Zaloguj się do panelu hostingu i sprawdź ostatnie wdrożenie.
3. Cofnij ostatnią zmianę: GitHub → zakładka **Commits** → wybierz ostatnią działającą wersję.
4. Kontakt: Marcin Dutkiewicz (mentor).
