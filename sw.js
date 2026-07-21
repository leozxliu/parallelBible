// Service worker for Parallel Bible.
// Caches the app shell so the page loads offline, and caches verse/image
// responses after they're first viewed online. Bump CACHE to invalidate.
const CACHE = 'parallel-bible-v3';
const SHELL = [
  './',
  './index.html',
  './summaries.json',
  './manifest.webmanifest',
  './favicon.svg',
  './icon-192.png',
  './icon-512.png',
  './icon-180.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE)
      // Tolerate a missing file (e.g. an icon not yet added) so install never fails.
      .then(cache => Promise.allSettled(SHELL.map(url => cache.add(url))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

function cachePut(request, response) {
  const copy = response.clone();
  caches.open(CACHE).then(cache => cache.put(request, copy)).catch(() => {});
  return response;
}

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // The HTML page: network-first so edits/deploys show up immediately when
  // online, falling back to the cached shell when offline.
  if (req.mode === 'navigate' || url.pathname === '/' || url.pathname.endsWith('/index.html')) {
    event.respondWith(
      fetch(req).then(res => cachePut(req, res))
        .catch(() => caches.match(req).then(r => r || caches.match('./index.html')))
    );
    return;
  }

  // JSON data (summaries.json): network-first so content updates propagate,
  // falling back to cache when offline.
  if (url.origin === self.location.origin && url.pathname.endsWith('.json')) {
    event.respondWith(
      fetch(req).then(res => cachePut(req, res)).catch(() => caches.match(req))
    );
    return;
  }

  // Same-origin static assets (icons, manifest): cache-first.
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(req).then(r => r || fetch(req).then(res => cachePut(req, res)))
    );
    return;
  }

  // External requests (bolls.life verses, share images): network-first, fall
  // back to cache so previously-viewed chapters still load offline.
  event.respondWith(
    fetch(req).then(res => cachePut(req, res)).catch(() => caches.match(req))
  );
});
