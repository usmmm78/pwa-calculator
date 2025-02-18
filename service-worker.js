
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('pwa-cache').then(function(cache) {
      return cache.addAll([
        './해상도 계산기.html',
        './manifest.json',
        './icon-192x192.png',
        './icon-512x512.png',
        './apple-touch-icon.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  }
});
