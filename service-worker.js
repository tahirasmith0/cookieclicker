const CACHE_NAME = 'cookie-clicker-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/game.js'
    '/style.css'   // Add other files like CSS or images here if needed
];

if ('serviceWorker' in navigator) {
   navigator.serviceWorker.register('/service-worker.js')
   .then(registration => {
      console.log('Service Worker registered:', registration);
   })
   .catch(error => {
      console.error('Service Worker registration failed:', error);
   });
}
self.addEventListener('install', event => {
   event.waitUntil(
      caches.open('my-pwa-cache')
      .then(cache => {
         return cache.addAll([
            '/',
            '/index.html',
            '/styles.css',
            '/game.js',
            //'/images/logo.png'
         ]);
      })
   );
});

self.addEventListener('fetch', event => {
   event.respondWith(
      caches.match(event.request)
      .then(response => {
         return response || fetch(event.request);
      })
   );
});

self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
