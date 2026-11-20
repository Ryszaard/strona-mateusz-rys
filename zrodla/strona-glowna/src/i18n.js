// Polish / English language switch.
// The page is written in Polish; when English is selected every visible text,
// alt text and aria-label is swapped using the dictionary below. A MutationObserver
// keeps text rendered later by React (menu, tabs) translated as well.

const EN = {
  'Oferta': 'Services',
  'Realizacje': 'Portfolio',
  'Cennik': 'Pricing',
  'O mnie': 'About me',
  'Kontakt': 'Contact',
  'Zamów stronę': 'Order a website',
  'Strony internetowe': 'Websites',
  'Mateusz Ryś – strona główna': 'Mateusz Ryś – home',
  'Menu': 'Menu',
  'Język / Language': 'Language',
  'Samochód z tablicą mateuszrys.pl jadący nocą w deszczu': 'A car with a mateuszrys.pl number plate driving at night in the rain',
  'Mateusz Ryś · Strony internetowe': 'Mateusz Ryś · Websites',
  'Taką stronę zrobię': 'I will build a website',
  'dla Twojej firmy.': 'like this for your business.',
  'Przewiń i zobacz, jak może przyciągać uwagę Twoich klientów.': 'Scroll down and see how it can grab your customers’ attention.',
  'Przewiń i poczuj to': 'Scroll and feel it',
  'Efekt wow': 'The wow effect',
  'Strona, obok której nie przejdziesz obojętnie.': 'A website nobody scrolls past.',
  'Ruch, światło i klimat, które zatrzymują klienta na dłużej. Dokładnie to, co teraz oglądasz.': 'Motion, light and atmosphere that keep customers on your page longer. Exactly what you are watching right now.',
  'Strona już od': 'Websites from',
  'zł': 'PLN',
  'Strona promocyjna. Cena końcowa, bez ukrytych kosztów.': 'Promo page. Final price, no hidden costs.',
  'Tylko dla Ciebie': 'Made just for you',
  'Każdy projekt od zera, bez szablonów. Rozmawiasz bezpośrednio ze mną.': 'Every project designed from scratch, no templates. You talk directly to me.',
  'Do Twojej strony': 'To your website',
  'Chcesz': 'Want',
  'więcej?': 'more?',
  'Taką stronę albo zupełnie inną zaprojektuję dla Twojej firmy. Ty opisujesz pomysł, ja zamieniam go w stronę, która sprzedaje.': 'I will design a website like this – or something completely different – for your business. You describe the idea, I turn it into a website that sells.',
  'Zamów swoją stronę': 'Order your website',
  'Co mogę dla Ciebie zrobić?': 'What can I do for you?',
  'Wybierz, od czego zaczynamy.': 'Choose where we start.',
  'Każdą stronę projektuję od zera, pod Twoją firmę. Ceny są końcowe i ustalamy je przed rozpoczęciem pracy.': 'I design every website from scratch for your business. Prices are final and agreed before any work starts.',
  'Strona promocyjna': 'Promo page',
  'Strona wizytówka': 'Business card website',
  'Strona firmowa': 'Company website',
  'Odświeżenie strony': 'Website refresh',
  '799 zł': '799 PLN',
  '1490 zł': '1490 PLN',
  'od 2490 zł': 'from 2490 PLN',
  'od 990 zł': 'from 990 PLN',
  'Jedna efektowna, przewijana strona pod konkretną usługę, promocję lub wydarzenie.': 'One striking scrolling page for a specific service, promotion or event.',
  'Do 5 podstron, własny projekt graficzny i Wizytówka Google. Najczęściej wybierana.': 'Up to 5 pages, a custom design and a Google Business Profile. The most popular choice.',
  'Rozbudowana strona do 8 podstron dla firmy, która chce pokazać więcej.': 'A larger website of up to 8 pages for businesses that want to show more.',
  'Nowy wygląd starej strony, wersja na telefon i szybsze ładowanie.': 'A new look for your old website, a mobile version and faster loading.',
  'Najczęściej wybierana': 'Most popular',
  'Szczegóły': 'Details',
  'Jak to działa': 'How it works',
  'Ty opisujesz pomysł.': 'You describe the idea.',
  'Ja buduję stronę.': 'I build the website.',
  'Wypełniasz krótki formularz: dane firmy, logo, inspiracje i kolory. Ustalamy szczegóły i cenę, a Ty dostajesz gotową stronę, którą sam umieszczasz w internecie.': 'You fill in a short form: business details, logo, inspirations and colours. We agree the details and the price, and you receive a finished website that you publish yourself.',
  'Opisz swoją stronę': 'Describe your website',
  'Pełna oferta, realizacje i o mnie': 'Full offer, portfolio and about me',
  'Mateusz Ryś – Strony internetowe': 'Mateusz Ryś – Websites',
  'Polityka prywatności': 'Privacy policy',
  'Zdjęcie samochodu: Damian B Oh,': 'Car photo: Damian B Oh,',
  ', licencja': ', licence',
  '. Zdjęcie przycięte, wycięte z tła, z korektą kolorów i podmienioną tablicą. Strona jest pokazem moich możliwości i nie jest powiązana z BMW AG. BMW i M4 są znakami towarowymi BMW AG.': '. Cropped, cut out from its background, colour graded, with a replaced number plate. This page is a showcase of my work and is not affiliated with BMW AG. BMW and M4 are trademarks of BMW AG.',
}

const norm = (s) => s.replace(/\s+/g, ' ').trim()
const DICT = {}
for (const k in EN) DICT[norm(k)] = EN[k]
const REV = {}
for (const k in DICT) if (!(DICT[k] in REV)) REV[DICT[k]] = k

let lang = 'pl'
try {
  lang = localStorage.getItem('lang') || ((navigator.language || 'pl').toLowerCase().startsWith('pl') ? 'pl' : 'en')
} catch (e) {}

const listeners = new Set()
export const getLang = () => lang
export const onLangChange = (fn) => (listeners.add(fn), () => listeners.delete(fn))

function tr(raw) {
  const n = norm(raw)
  if (!n) return raw
  const pl = REV[n] || n
  const out = lang === 'en' ? DICT[pl] || pl : pl
  if (out === n) return raw
  return raw.match(/^\s*/)[0] + out + raw.match(/\s*$/)[0]
}
const ATTRS = ['alt', 'aria-label']
function translateTree(root) {
  if (root.nodeType === 3) {
    const v = tr(root.nodeValue)
    if (v !== root.nodeValue) root.nodeValue = v
    return
  }
  if (root.nodeType !== 1 || /^(SCRIPT|STYLE)$/.test(root.nodeName)) return
  const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT)
  const nodes = []
  while (w.nextNode()) nodes.push(w.currentNode)
  nodes.forEach((n) => {
    const v = tr(n.nodeValue)
    if (v !== n.nodeValue) n.nodeValue = v
  })
  const els = [root, ...root.querySelectorAll('[alt],[aria-label]')]
  els.forEach((el) =>
    ATTRS.forEach((a) => {
      if (!el.hasAttribute || !el.hasAttribute(a)) return
      const v = el.getAttribute(a)
      if (!v) return
      const pl = REV[norm(v)] || norm(v)
      const out = lang === 'en' ? DICT[pl] || pl : pl
      if (out !== v) el.setAttribute(a, out)
    })
  )
}
function applyAll() {
  document.documentElement.lang = lang
  const t = 'Mateusz Ryś – Strony internetowe'
  document.title = lang === 'en' ? EN[t] : t
  translateTree(document.body)
  listeners.forEach((fn) => fn(lang))
}
export function setLang(l) {
  lang = l
  try { localStorage.setItem('lang', l) } catch (e) {}
  applyAll()
}
export function initI18n() {
  const mo = new MutationObserver((muts) => {
    if (lang !== 'en') return
    for (const m of muts) {
      if (m.type === 'characterData') translateTree(m.target)
      else if (m.type === 'attributes') translateTree(m.target)
      else m.addedNodes.forEach((n) => translateTree(n))
    }
  })
  mo.observe(document.body, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ATTRS })
  applyAll()
}
