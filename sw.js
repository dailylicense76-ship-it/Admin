self.addEventListener('install', (e) => {
    console.log('[Degz Pulse] Service Worker Installed');
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    console.log('[Degz Pulse] Service Worker Activated');
});

self.addEventListener('fetch', (e) => {
    // Basic fetch passthrough para tuloy-tuloy ang connection sa API
    e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
