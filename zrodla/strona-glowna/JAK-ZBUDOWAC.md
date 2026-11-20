# Strona główna (scena z BMW) – źródła

Strona główna mateuszrys.pl jest zbudowana z tych plików (React + Three.js + GSAP, Vite).

```bash
cd zrodla/strona-glowna
npm install
npx vite build
# skopiuj wynik do strony:
rm -rf ../../assets && cp -r dist/assets ../../assets && cp dist/index.html ../../index.html
rm -f ../../assets/inter-*.woff2
python3 ../../narzedzia/aktualizuj_naglowki.py
```

- Teksty: `src/ui/Drive.jsx` (scena), `src/ui/Home.jsx` (oferta pod sceną), tłumaczenia EN: `src/i18n.js`.
- Tryb lekki (słabsze komputery i telefony): `lite` w `src/ui/Drive.jsx` i `src/ui/NightRoad.js`.
  Wymuszenie trybu lekkiego do testów: dopisz `?lite` do adresu.
- Dawna strona główna (oferta, cennik, formularz) jest teraz w `oferta.html` (adres /oferta).
