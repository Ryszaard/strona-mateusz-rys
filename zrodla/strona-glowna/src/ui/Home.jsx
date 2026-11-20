const PACKAGES = [
  { name: 'Strona promocyjna', price: '799 zł', desc: 'Jedna efektowna, przewijana strona pod konkretną usługę, promocję lub wydarzenie.' },
  { name: 'Strona wizytówka', price: '1490 zł', desc: 'Do 5 podstron, własny projekt graficzny i Wizytówka Google. Najczęściej wybierana.', hot: true },
  { name: 'Strona firmowa', price: 'od 2490 zł', desc: 'Rozbudowana strona do 8 podstron dla firmy, która chce pokazać więcej.' },
  { name: 'Odświeżenie strony', price: 'od 990 zł', desc: 'Nowy wygląd starej strony, wersja na telefon i szybsze ładowanie.' },
]

const Arrow = () => (
  <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden="true"><path d="M0 5h14M10 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" /></svg>
)

export default function Home() {
  return (
    <main id="explore" className="bg-ink text-white">
      <section className="wrap py-24 md:py-32">
        <div className="reveal max-w-2xl">
          <p className="kicker text-mblue">Oferta</p>
          <h2 className="mt-4 text-4xl font-bold leading-tight tracking-[-0.02em] md:text-6xl">Wybierz, od czego zaczynamy.</h2>
          <p className="mt-5 text-[16px] font-light leading-relaxed text-white/65 md:text-[18px]">
            Każdą stronę projektuję od zera, pod Twoją firmę. Ceny są końcowe i ustalamy je przed rozpoczęciem pracy.
          </p>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PACKAGES.map((p) => (
            <a
              key={p.name}
              href="/oferta#cennik"
              className={`reveal group relative flex flex-col rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 ${
                p.hot ? 'border-mblue/70 bg-mblue/10' : 'border-white/10 bg-white/[0.03] hover:border-white/25'
              }`}
            >
              {p.hot && <span className="absolute -top-3 left-6 rounded-full bg-mblue px-3 py-1 text-[11px] font-semibold">Najczęściej wybierana</span>}
              <span className="text-[15px] font-semibold">{p.name}</span>
              <span className="mt-3 text-3xl font-bold tracking-tight">{p.price}</span>
              <span className="mt-3 flex-1 text-[14px] font-light leading-relaxed text-white/60">{p.desc}</span>
              <span className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold text-white/80 group-hover:text-white">
                Szczegóły <Arrow />
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="wrap grid items-center gap-10 py-20 md:grid-cols-[1.4fr_1fr] md:py-28">
          <div className="reveal">
            <p className="kicker text-mblue">Jak to działa</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.02em] md:text-5xl">Ty opisujesz pomysł.<br />Ja buduję stronę.</h2>
            <p className="mt-5 max-w-xl text-[16px] font-light leading-relaxed text-white/65">
              Wypełniasz krótki formularz: dane firmy, logo, inspiracje i kolory. Ustalamy szczegóły i cenę, a Ty dostajesz gotową stronę, którą sam umieszczasz w internecie.
            </p>
          </div>
          <div className="reveal flex flex-col gap-3">
            <a href="/oferta#zamow" className="btn-primary">Opisz swoją stronę <Arrow /></a>
            <a href="/oferta" className="btn-light">Pełna oferta, realizacje i o mnie</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10 text-[12px] leading-relaxed text-white/45">
        <div className="wrap grid gap-6 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-[14px] font-semibold text-white">Mateusz Ryś – Strony internetowe</p>
            <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
              <a className="hover:text-white" href="/oferta">Oferta</a>
              <a className="hover:text-white" href="/oferta#kontakt">Kontakt</a>
              <a className="hover:text-white" href="/polityka-prywatnosci">Polityka prywatności</a>
            </p>
          </div>
          <p>
            Zdjęcie samochodu: Damian B Oh,{' '}
            <a className="underline hover:text-white" href="https://commons.wikimedia.org/wiki/Category:BMW_M4_(G82)">Wikimedia Commons</a>, licencja{' '}
            <a className="underline hover:text-white" href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>. Zdjęcie przycięte, wycięte z tła, z korektą kolorów i podmienioną tablicą. Strona jest pokazem moich możliwości i nie jest powiązana z BMW AG. BMW i M4 są znakami towarowymi BMW AG.
          </p>
        </div>
      </footer>
    </main>
  )
}
