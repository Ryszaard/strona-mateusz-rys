import { useCallback, useEffect, useLayoutEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Drive from './ui/Drive'
import Home from './ui/Home'
import { getLang, setLang, onLangChange, initI18n } from './i18n'

gsap.registerPlugin(ScrollTrigger)

const LINKS = [
  ['/oferta', 'Oferta'],
  ['/oferta#realizacje', 'Realizacje'],
  ['/oferta#cennik', 'Cennik'],
  ['/oferta#o-mnie', 'O mnie'],
  ['/oferta#kontakt', 'Kontakt'],
]

function LangSwitch() {
  const [lang, setL] = useState(getLang())
  useEffect(() => onLangChange(setL), [])
  return (
    <div className="flex items-center rounded-full border border p-[3px] text-[12px] font-semibold" style={{ borderColor: 'color-mix(in srgb, currentColor 35%, transparent)' }} role="group" aria-label="Język / Language">
      {['pl', 'en'].map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`rounded-full px-[10px] py-[5px] uppercase transition ${lang === l ? 'bg-grad text-white' : 'opacity-70 hover:opacity-100'}`}
        >
          {l}
        </button>
      ))}
    </div>
  )
}

function Nav({ solid }) {
  const [open, setOpen] = useState(false)
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 text-white transition-colors duration-500 ${
        solid || open ? 'bg-ink/95 shadow-[0_1px_0_rgba(255,255,255,0.08)] backdrop-blur' : 'bg-gradient-to-b from-black/60 to-transparent'
      }`}
    >
      <div className="wrap flex h-16 items-center justify-between md:h-[72px]">
        <a href="/" className="flex items-center gap-[10px] text-left" aria-label="Mateusz Ryś – strona główna">
          <span className="grid h-[34px] w-[34px] place-items-center rounded-[10px] bg-grad text-[14px] font-extrabold">MR</span>
          <span className="leading-tight">
            <span className="block text-[16px] font-bold tracking-tight">Mateusz Ryś</span>
            <span className="block text-[12px] font-medium text-white/60">Strony internetowe</span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map(([href, label]) => (
            <a key={href} href={href} className="text-[14px] font-medium opacity-80 transition hover:opacity-100">
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LangSwitch />
          <a href="/oferta#zamow" className="btn-primary hidden h-10 px-5 text-[13px] sm:inline-flex">
            Zamów stronę
          </a>
          <button onClick={() => setOpen((o) => !o)} className="grid h-10 w-10 place-items-center lg:hidden" aria-label="Menu" aria-expanded={open}>
            <span className="relative block h-3 w-5">
              <span className={`absolute left-0 top-0 h-[1.5px] w-5 bg-current transition ${open ? 'translate-y-[5px] rotate-45' : ''}`} />
              <span className={`absolute bottom-0 left-0 h-[1.5px] w-5 bg-current transition ${open ? '-translate-y-[5px] -rotate-45' : ''}`} />
            </span>
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-ink lg:hidden">
          <div className="wrap flex flex-col py-3">
            {LINKS.map(([href, label]) => (
              <a key={href} href={href} className="border-b border-white/10 py-4 text-[16px] font-semibold last:border-0">
                {label}
              </a>
            ))}
            <a href="/oferta#zamow" className="btn-primary mt-3">Zamów stronę</a>
          </div>
        </div>
      )}
    </header>
  )
}

export default function App() {
  const [solid, setSolid] = useState(false)

  useEffect(() => {
    initI18n()
  }, [])

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: '#explore',
        start: 'top 72px',
        onEnter: () => setSolid(true),
        onLeaveBack: () => setSolid(false),
      })
      gsap.set('.reveal', { autoAlpha: 0, y: 36 })
      ScrollTrigger.batch('.reveal', {
        start: 'top 90%',
        onEnter: (els) => gsap.to(els, { autoAlpha: 1, y: 0, duration: 1, ease: 'expo.out', stagger: 0.08, overwrite: true }),
      })
      gsap.utils.toArray('.parallax').forEach((el) => {
        gsap.fromTo(el, { yPercent: -10 }, { yPercent: 6, ease: 'none', scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true } })
      })
    })
    return () => ctx.revert()
  }, [])

  const go = useCallback((id) => {
    if (id === 'top') return window.scrollTo({ top: 0, behavior: 'smooth' })
    const el = document.getElementById(id)
    if (!el) return
    const offset = id === 'explore' ? 0 : 64
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' })
  }, [])

  return (
    <>
      <Nav solid={solid} />
      <Drive onExplore={() => go('explore')} />
      <Home />
    </>
  )
}
