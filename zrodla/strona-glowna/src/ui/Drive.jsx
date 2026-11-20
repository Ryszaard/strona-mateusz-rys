import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import carCut from '../assets/car-cutout.webp'
import { createNightRoad } from './NightRoad'
import { clamp, lerp, smoothstep } from '../state'

const easeInOut = (t) => 0.5 - 0.5 * Math.cos(Math.PI * t)

const grain =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.55'/></svg>\")"

export default function Drive({ onExplore }) {
  const root = useRef()
  const canvas = useRef()
  const flood = useRef()
  const dist = useRef()
  const bar = useRef()

  useLayoutEffect(() => {
    const st = { p: 0 }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom bottom', scrub: 1 },
      })
      tl.to(st, { p: 1, duration: 1 }, 0)
      tl.to('.d-hero', { autoAlpha: 0, y: -20, duration: 0.05 }, 0.02)

      const chapter = (sel, at, len = 0.13) => {
        tl.fromTo(sel, { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, duration: 0.04, ease: 'power2.out' }, at)
        tl.to(sel, { autoAlpha: 0, y: -40, duration: 0.04, ease: 'power2.in' }, at + len)
      }
      chapter('.d-ch1', 0.14)
      chapter('.d-ch2', 0.36)
      chapter('.d-ch3', 0.56)

      const counter = { v: 0 }
      const ps = root.current.querySelector('.d-ps')
      tl.to(counter, { v: 799, duration: 0.08, ease: 'power1.out', onUpdate: () => (ps.textContent = Math.round(counter.v)) }, 0.37)

      tl.to('.d-hud', { autoAlpha: 0, duration: 0.03 }, 0.8)
      tl.to('.d-finale', { autoAlpha: 1, duration: 0.05 }, 0.84)
      tl.fromTo('.d-word', { yPercent: 110 }, { yPercent: 0, duration: 0.05, stagger: 0.02, ease: 'power3.out' }, 0.86)
      tl.fromTo('.d-fin-sub', { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.04, stagger: 0.012 }, 0.9)
    }, root)

    const mobile = window.matchMedia('(max-width: 768px), (pointer: coarse)').matches
    const cores = navigator.hardwareConcurrency || 4
    const mem = navigator.deviceMemory || 8
    const lite = mobile || cores <= 4 || mem <= 4 || /[?&]lite\b/.test(location.search)
    let world = null
    try {
      world = createNightRoad(canvas.current, carCut, { mobile, lite })
    } catch (err) {
      console.error('WebGL unavailable', err)
    }
    const onResize = () => world && world.resize()
    window.addEventListener('resize', onResize)
    let visible = true
    const io = new IntersectionObserver(([en]) => (visible = en.isIntersecting), { threshold: 0 })
    io.observe(root.current)

    let acc = 0
    // bardzo słaby komputer: gdy nawet najniższa jakość nie daje płynności,
    // scena przestaje animować się w tle i rysuje klatkę tylko przy przewijaniu
    let onDemand = false
    let lastDrawnP = -1
    let sinceDraw = 0
    let fFrames = 0
    let fTime = 0
    const tick = (time, deltaMs) => {
      // na słabszym sprzęcie rysujemy maks. 30 klatek na sekundę
      if (lite) { acc += deltaMs; if (acc < 32) return; deltaMs = acc; acc = 0 }
      const p = st.p
      const a = clamp(p / 0.8)
      sinceDraw += deltaMs
      if (onDemand && Math.abs(p - lastDrawnP) < 0.0004 && sinceDraw < 400) return
      if (world && visible) {
        const o = world.render(p, Math.min(sinceDraw, 50) / 1000)
        lastDrawnP = p
        sinceDraw = 0
        if (!onDemand && world.isLowest()) {
          fFrames++
          fTime += deltaMs
          if (fTime > 1500) {
            if ((fFrames * 1000) / fTime < 15) onDemand = true
            fFrames = 0
            fTime = 0
          }
        }
        if (dist.current) dist.current.textContent = String(Math.max(0, Math.round(o.d))).padStart(3, '0')
      }
      if (flood.current) flood.current.style.opacity = smoothstep(0.62, 0.95, a) * (1 - smoothstep(0.82, 0.92, p)) * 0.45
      if (bar.current) bar.current.style.transform = `scaleX(${p})`
    }
    gsap.ticker.add(tick)
    return () => {
      gsap.ticker.remove(tick)
      window.removeEventListener('resize', onResize)
      io.disconnect()
      world && world.dispose()
      ctx.revert()
    }
  }, [])

  return (
    <section ref={root} id="top" className="relative h-[700vh] bg-black text-white">
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden">
        {/* WebGL night road with the photographed car */}
        <canvas ref={canvas} className="absolute inset-0 h-full w-full" aria-label="Samochód z tablicą mateuszrys.pl jadący nocą w deszczu" />

        {/* headlight flood when the car is right in front of you */}
        <div
          ref={flood}
          className="pointer-events-none absolute inset-0 opacity-0 mix-blend-screen"
          style={{ background: 'radial-gradient(70% 50% at 50% 55%, rgba(210,226,255,0.7), rgba(80,120,220,0.15) 55%, transparent 80%)' }}
        />
        {/* cinematic vignette + grain */}
        <div className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(120% 90% at 50% 50%, transparent 55%, rgba(0,0,0,0.85))' }} />
        <div className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-overlay" style={{ backgroundImage: grain }} />

        {/* side shade behind the chapter copy */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:bg-gradient-to-r md:from-black/70 md:via-transparent md:to-black/70" />
        <div className="d-hero pointer-events-none absolute inset-x-0 top-0 h-[42svh] bg-gradient-to-b from-black/85 via-black/40 to-transparent" />

        {/* ---------- intro ---------- */}
        <div className="d-hero absolute inset-x-0 top-[16svh] flex flex-col items-center text-center">
          <p className="kicker text-white/60">Mateusz Ryś · Strony internetowe</p>
          <h1 className="mt-4 max-w-[92vw] text-[34px] font-bold leading-[1.05] tracking-[-0.02em] md:text-6xl">Taką stronę zrobię<br />dla Twojej firmy.</h1>
          <p className="mt-4 max-w-[86vw] text-[14px] font-light text-white/60 md:text-[16px]">Przewiń i zobacz, jak może przyciągać uwagę Twoich klientów.</p>
        </div>
        <div className="d-hero absolute inset-x-0 bottom-[7svh] flex flex-col items-center gap-4">
          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/75">Przewiń i poczuj to</span>
          <span className="relative block h-12 w-px overflow-hidden bg-white/20">
            <span className="absolute left-0 top-0 block h-5 w-px animate-drop bg-white" />
          </span>
        </div>

        {/* ---------- chapters ---------- */}
        <div className="d-ch1 invisible absolute bottom-[12svh] left-5 max-w-[86vw] md:bottom-auto md:left-12 md:top-1/2 md:max-w-[360px] md:-translate-y-1/2">
          <p className="kicker text-mblue">Efekt wow</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight md:text-5xl">Strona, obok której nie przejdziesz obojętnie.</h2>
          <p className="mt-3 text-[15px] font-light leading-relaxed text-white/70">Ruch, światło i klimat, które zatrzymują klienta na dłużej. Dokładnie to, co teraz oglądasz.</p>
        </div>
        <div className="d-ch2 invisible absolute bottom-[12svh] right-5 max-w-[86vw] text-right md:bottom-auto md:right-12 md:top-1/2 md:max-w-[360px] md:-translate-y-1/2">
          <p className="kicker text-mblue">Strona już od</p>
          <p className="mt-2 text-6xl font-bold tabular-nums md:text-8xl">
            <span className="d-ps">0</span>
            <span className="ml-2 text-2xl font-light text-white/60 md:text-3xl">zł</span>
          </p>
          <p className="mt-2 text-[15px] font-light text-white/70">Strona promocyjna. Cena końcowa, bez ukrytych kosztów.</p>
        </div>
        <div className="d-ch3 invisible absolute bottom-[12svh] left-5 max-w-[86vw] md:bottom-auto md:left-12 md:top-1/2 md:max-w-[360px] md:-translate-y-1/2">
          <p className="kicker text-mblue">Tylko dla Ciebie</p>
          <p className="mt-2 text-6xl font-bold md:text-8xl">1:1</p>
          <p className="mt-2 text-[15px] font-light text-white/70">Każdy projekt od zera, bez szablonów. Rozmawiasz bezpośrednio ze mną.</p>
        </div>

        {/* ---------- HUD ---------- */}
        <div className="d-hud absolute inset-x-5 bottom-5 flex items-end justify-between text-white/70 md:inset-x-12 md:bottom-8">
          <p className="text-[11px] uppercase tracking-[0.2em]">
            Do Twojej strony <span ref={dist} className="ml-2 font-semibold tabular-nums text-white">250</span> m
          </p>
          <div className="h-px w-28 bg-white/20 md:w-48">
            <div ref={bar} className="h-px origin-left bg-mblue" style={{ transform: 'scaleX(0)' }} />
          </div>
        </div>

        {/* ---------- finale ---------- */}
        <div className="d-finale invisible absolute inset-0 flex flex-col items-center justify-center px-6 text-center opacity-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
          <div className="relative">
            <p className="d-fin-sub kicker text-white/70">mateuszrys.pl</p>
            <h2 className="mt-5 text-[13vw] font-extrabold uppercase leading-[0.9] tracking-[-0.02em] md:text-[8.5vw]">
              <span className="block overflow-hidden"><span className="d-word inline-block">Chcesz</span></span>
              <span className="block overflow-hidden"><span className="d-word inline-block">więcej?</span></span>
            </h2>
            <p className="d-fin-sub mx-auto mt-6 max-w-md text-[15px] font-light text-white/75">
              Taką stronę albo zupełnie inną zaprojektuję dla Twojej firmy. Ty opisujesz pomysł, ja zamieniam go w stronę, która sprzedaje.
            </p>
            <div className="d-fin-sub mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="/oferta#zamow" className="btn-primary">
                Zamów swoją stronę
                <svg width="16" height="10" viewBox="0 0 16 10" fill="none"><path d="M0 5h14M10 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" /></svg>
              </a>
              <button onClick={onExplore} className="btn-light">Co mogę dla Ciebie zrobić?</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
