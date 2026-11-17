/* Only cache the public owner shell/assets. Never intercept Supabase, auth, APIs or POSTs. */
const APP_CACHE = 'streetbite-owner-v2';
const SHELL = ['/owner.html', '/app.js', '/styles.css', '/app-install.css', '/install-app.js', '/vendor/supabase.js', '/assets/app-icon-192.png', '/assets/app-icon-512.png', '/assets/app-icon-maskable.png'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(APP_CACHE).then(cache => cache.addAll(SHELL)));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('streetbite-owner-') && key !== APP_CACHE).map(key => caches.delete(key)))));
});
self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== self.location.origin) return;
  const ownerNavigation = request.mode === 'navigate' && ['/app','/owner','/owner.html'].includes(url.pathname);
  if (ownerNavigation) {
    event.respondWith(fetch(request).catch(async () => (await caches.open(APP_CACHE)).match('/owner.html')));
    return;
  }
  if (!SHELL.includes(url.pathname) || url.pathname.endsWith('.html')) return;
  event.respondWith(fetch(request).catch(async () => (await caches.open(APP_CACHE)).match(url.pathname)));
});
