# Stan strony: Mateusz Ryś – Strony internetowe – 18.11.2026 (wieczór)

| Etap | Status | Co zostało |
|---|---|---|
| 1. Konta i logowanie | ✅ | Bitwarden, 2FA i kody zapasowe na Gmailu, Facebooku i GitHubie. Rejestrator domeny i Cloudflare dostaną 2FA przy zakładaniu. |
| 2. GitHub | ✅ | Prywatne repo, Dependabot (alerty + poprawki) włączony, Cloudflare Pages ma dostęp tylko do tego repo. Secret scanning i ochrona gałęzi niedostępne na darmowym koncie – świadomie odłożone (brak kluczy w kodzie). |
| 3. Domena i wdrożenie | ❓ | ✅ https://mateuszrys.pl działa (Cloudflare Pages, automatyczne wdrożenie z `main`), ✅ serwery DNS: nola/trevor.ns.cloudflare.com, ✅ www.mateuszrys.pl podpięte, ✅ http → https (Always Use HTTPS + HSTS), ✅ brak starego rekordu DS z OVH. Zostało: przekierowanie www → mateuszrys.pl (reguła w Cloudflare) oraz DNSSEC (włączyć w Cloudflare, rekord DS dodać w OVH). |
| 4. Bezpieczeństwo strony | ✅ | securityheaders.com: **A+** (18.11.2026). Pułapka na boty, blokada wielokrotnej wysyłki, formularz wysyła na alias FormSubmit (adresu e-mail nie ma w kodzie formularza), CSP z odciskami skryptów, HSTS. Turnstile/limit po stronie serwera – świadomie odłożone (mały ruch, FormSubmit ma własny antyspam). |
| 5. RODO | ✅ | Polityka prywatności PL/EN, klauzula przy formularzu, dane w stopce. Bez działalności gospodarczej – administrator: Mateusz Ryś (imię, nazwisko, kontakt). |
| 6. Treść i telefon | ❓ | ✅ podpisy pól formularza powiązane z polami (czytniki ekranu), opisy zdjęć, stałe kolory w zmiennych CSS. Zostało: test na prawdziwym telefonie, prawdziwe opinie klientów, więcej realizacji. |
| 7. SEO | ❓ | ✅ tytuł, opis (≤155 znaków), jeden h1, favicon, obrazek do udostępnień + Open Graph, robots.txt, sitemap.xml, strona 404, dane strukturalne (schema.org), canonical. Zostało po domenie: sprawdzić podgląd linku na Facebooku i PageSpeed Insights. |
| 8. Analityka i logi | ❓ | ✅ Cloudflare Web Analytics (bez cookies), ✅ formularz aktywowany w FormSubmit i przetestowany – zgłoszenia dochodzą na Gmail. Zostało: Google Search Console, monitoring dostępności, test formularza z adresu mateuszrys.pl. |
| 9. Kopie | ✅ | Kod w GitHubie, instrukcja kopii i plan awaryjny w README. Do robienia co miesiąc: Download ZIP na dysk. |
| 10. Test przed live | ❓ | ✅ wszystkie wewnętrzne linki i kotwice działają, ✅ strona 404, sitemap, robots, ✅ PL/EN, okno polityki prywatności, ✅ widok na telefonie 360–414 px (poprawiony błąd poszerzania strony), ✅ nagłówki A+, ✅ http → https. Zostało: aktywacja FormSubmit dla mateuszrys.pl + test, przekierowanie www, DNSSEC, Search Console, test na prawdziwym iPhonie, podgląd linku na Facebooku. |

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

## Następny krok
Przekierowanie www → mateuszrys.pl i DNSSEC (wymaga logowania do Cloudflare i OVH), potem Search Console, monitoring i etap 10 (test końcowy, w tym telefon).
