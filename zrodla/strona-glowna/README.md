# M4 Competition Coupé G82 — Pure Performance

One-page site: React 18 · GSAP ScrollTrigger · Tailwind CSS · Vite

```bash
npm install
npm run dev            # http://localhost:5173
npm run build          # dist/
npm run build:single   # one self-contained index.html in dist-single/
```

- `src/ui/NightRoad.js` – Three.js night road in true 3D perspective (custom asphalt shader with headlight pool and wet
  reflections, sodium street lamps with mirrored wet-road reflections, guardrails, city skyline, rain, fog, dust, bloom, zoom blur). The car is a cut-out photo placed at real scale (1,887 mm
  wide) with a night colour grade, mirrored wet-road reflection and glowing headlights.
- `src/ui/Drive.jsx` – pins the scene and drives it with GSAP ScrollTrigger; chapters, HUD and the "PURE PERFORMANCE" finale.
  headlight glows and lens streak intensify, speed-dependent motion blur, chapters, "PURE PERFORMANCE" finale.
- `src/ui/Content.jsx` – intro + key figures, design, details, performance, interior, gallery, technical data tabs, CTA, footer.
- `src/assets/` – photos from Wikimedia Commons (CC BY-SA 4.0): Damian B Oh, Alexander Migl, Duboyong, Chanokchon.
  Resized, cropped and colour graded. Keep the attribution in the footer if you publish the site.

Independent fan concept, not affiliated with BMW AG.
