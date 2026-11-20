// Ukrywa pliki wewnętrzne (kod, notatki, narzędzia) – na stronie mają zwracać 404.
// Uruchamia się tylko dla ścieżek z _routes.json, więc nie spowalnia zwykłych stron.
export async function onRequest({ request, next, env }) {
  const path = new URL(request.url).pathname;
  if (path.startsWith('/api/')) return next();
  const page = await env.ASSETS.fetch(new URL('/404.html', request.url));
  return new Response(page.body, { status: 404, headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' } });
}
