# Stan strony: Mateusz Ryś – Strony internetowe – 18.11.2026 (wieczór)

| Etap | Status | Co zostało |
|---|---|---|
| 1. Konta i logowanie | ✅ | Bitwarden, 2FA i kody zapasowe na Gmailu, Facebooku i GitHubie. Rejestrator domeny i Cloudflare dostaną 2FA przy zakładaniu. |
| 2. GitHub | ✅ | Prywatne repo, Dependabot (alerty + poprawki) włączony, Cloudflare Pages ma dostęp tylko do tego repo. Secret scanning i ochrona gałęzi niedostępne na darmowym koncie – świadomie odłożone (brak kluczy w kodzie). |
| 3. Domena i wdrożenie | ✅ | https://mateuszrys.pl na Cloudflare Pages (automatyczne wdrożenie z `main`), DNS w Cloudflare, www i http przekierowują na https://mateuszrys.pl, DNSSEC działa (DS 2371 w rejestrze .pl, odpowiedzi podpisane – sprawdzone 18.11 19:48). |
| 4. Bezpieczeństwo strony | ✅ | securityheaders.com: **A+** (18.11.2026). Pułapka na boty, blokada wielokrotnej wysyłki, formularz wysyła na alias FormSubmit (adresu e-mail nie ma w kodzie formularza), CSP z odciskami skryptów, HSTS. Turnstile/limit po stronie serwera – świadomie odłożone (mały ruch, FormSubmit ma własny antyspam). |
| 5. RODO | ✅ | Polityka prywatności PL/EN, klauzula przy formularzu, dane w stopce. Bez działalności gospodarczej – administrator: Mateusz Ryś (imię, nazwisko, kontakt). |
| 6. Treść i telefon | ✅ | Podpisy pól, opisy zdjęć, kolory w zmiennych CSS, sprawdzone na iPhonie 18.11. Do rozwoju: prawdziwe opinie klientów i kolejne realizacje. |
| 7. SEO | ✅ | Tytuł, opis, h1, favicon, Open Graph (podgląd linku na Facebooku sprawdzony 18.11), robots.txt, sitemap.xml, 404, schema.org, canonical. Search Console: domena zweryfikowana (rekord TXT – nie usuwać), mapa strony przesłana 18.11 – sprawdzić za kilka dni, czy pobrana. |
| 8. Analityka i logi | ✅ | Cloudflare Web Analytics (bez cookies), Search Console, formularz aktywowany dla mateuszrys.pl i przetestowany (zgłoszenia na Gmail, wysyłka na alias). Monitoring dostępności – świadomie odłożony (Cloudflare Pages, statyczna strona). |
| 9. Kopie | ✅ | Kod w GitHubie, instrukcja kopii i plan awaryjny w README. Do robienia co miesiąc: Download ZIP na dysk. |
| 10. Test przed live | ✅ | Linki, 404, sitemap, robots, PL/EN, polityka, telefon (emulacja + prawdziwy iPhone), nagłówki A+, http/www → https://mateuszrys.pl, formularz z domeny, podgląd na Facebooku, DNSSEC. |

## Co zrobiliśmy (18.11.2026)
- Etap 1: menedżer haseł, 2FA, kody zapasowe.
- Etap 5: polityka prywatności PL/EN, klauzula przy formularzu, dane w stopce, czcionki z własnego serwera.
- Etap 2: konto GitHub z 2FA, prywatne repozytorium, pliki startowe (.gitignore, README, ten raport).

## Decyzje
- ✅ Domena: mateuszrys.pl
- ✅ Hosting: Cloudflare Pages
- ✅ Bez działalności gospodarczej (na razie)

## Co zrobiliśmy (18.11.2026, popołudnie)
- Etap 4: zabezpieczenia formularza i nagłówki bezpieczeństwa.
- Etap 6: dostępność formularza.
- Etap 7: SEO (ikonki, obrazek do udostępnień, mapa strony, 404, dane strukturalne).
- Etap 9: kopie zapasowe i plan awaryjny w README.

## Co zrobiliśmy (18.11.2026, wieczór)
- Domena mateuszrys.pl przełączona na Cloudflare i podpięta do strony razem z www.
- Włączone Always Use HTTPS. Sprawdzone: strona, nagłówki bezpieczeństwa, statystyki, 404, sitemap i realizacja M4 działają pod mateuszrys.pl.
- Formularz aktywowany i przetestowany.

## Co zrobiliśmy (20.11.2026)
- Widoczność w AI: `llms.txt` z opisem oferty, `robots.txt` jawnie wpuszcza wyszukiwarki i boty AI (GPTBot, ClaudeBot, PerplexityBot, Google-Extended i inne).
- Dane strukturalne FAQPage (częste pytania) na stronie głównej.
- Realizacja M4: opis, canonical i Open Graph.
- Search Console: strona główna i /realizacje/m4 są w indeksie Google.
- Bing Webmaster Tools: import z Search Console, klucz IndexNow.

- Podstrony usług: /strona-promocyjna, /strona-wizytowka, /odswiezenie-strony (opis, cena, FAQ, dane dla Google).
- Poradnik /blog/ z 3 artykułami (ceny stron, wizytówka czy promocyjna, co przygotować przed zamówieniem).
- Wersja angielska pod /en/ (hreflang), przycisk PL/EN przenosi między adresami.
- favicon.ico.

## Następny krok
Strona gotowa do ogłoszenia. Za kilka dni: Search Console (czy mapa strony pobrana). Na bieżąco: dodawać realizacje i prawdziwe opinie klientów.
