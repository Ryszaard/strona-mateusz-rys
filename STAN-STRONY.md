# Stan strony: Mateusz Ryś – Strony internetowe – 18.11.2026

| Etap | Status | Co zostało |
|---|---|---|
| 1. Konta i logowanie | ✅ | Bitwarden, 2FA i kody zapasowe na Gmailu, Facebooku i GitHubie. Rejestrator domeny i Cloudflare dostaną 2FA przy zakładaniu. |
| 2. GitHub | ✅ | Prywatne repo z plikami. Do kliknięcia: Dependabot alerts i security updates. Secret scanning/push protection i ochrona gałęzi niedostępne na darmowym koncie dla prywatnego repo – świadomie odłożone (strona nie używa żadnych kluczy). |
| 3. Domena i wdrożenie | ❌ | Decyzja: domena mateuszrys.pl (18.11.2026 wolna wg dns.pl), hosting Cloudflare Pages. Do zrobienia: kupić domenę u polskiego rejestratora, konto Cloudflare z 2FA, podłączyć repo, przenieść DNS, HTTPS i przekierowanie www. |
| 4. Bezpieczeństwo strony | ❓ | ✅ pułapka na boty, blokada szybkiego i wielokrotnego wysyłania, adres odbiorcy ukryty w kodzie, `_headers` (HSTS, CSP z odciskami skryptów, nosniff, X-Frame-Options, Referrer-Policy, Permissions-Policy) – przetestowane lokalnie bez błędów. Zostało po hostingu: Turnstile i limit po stronie serwera, alias FormSubmit, ocena na securityheaders.com. |
| 5. RODO | ✅ | Polityka prywatności PL/EN, klauzula przy formularzu, dane w stopce. Bez działalności gospodarczej – administrator: Mateusz Ryś (imię, nazwisko, kontakt). |
| 6. Treść i telefon | ❓ | ✅ podpisy pól formularza powiązane z polami (czytniki ekranu), opisy zdjęć, stałe kolory w zmiennych CSS. Zostało: test na prawdziwym telefonie, prawdziwe opinie klientów, więcej realizacji. |
| 7. SEO | ❓ | ✅ tytuł, opis (≤155 znaków), jeden h1, favicon, obrazek do udostępnień + Open Graph, robots.txt, sitemap.xml, strona 404, dane strukturalne (schema.org), canonical. Zostało po domenie: sprawdzić podgląd linku na Facebooku i PageSpeed Insights. |
| 8. Analityka i logi | ❌ | Po wyborze hostingu: Search Console, analityka bez cookies, monitoring, test formularza. |
| 9. Kopie | ✅ | Kod w GitHubie, instrukcja kopii i plan awaryjny w README. Do robienia co miesiąc: Download ZIP na dysk. |
| 10. Test przed live | ❌ | Na sam koniec. |

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

## Następny krok
Etap 3: kupić domenę mateuszrys.pl, założyć konto Cloudflare z 2FA, podłączyć repozytorium do Cloudflare Pages. Potem etap 8 (Search Console, analityka bez cookies, monitoring, test formularza) i etap 10.
