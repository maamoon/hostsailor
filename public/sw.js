// Service Worker for HostSailor
const CACHE_NAME = 'hostsailor-v1.2.0';
const urlsToCache = [
  '/sail-web-launch/',
  '/sail-web-launch/index.html',
  '/sail-web-launch/assets/index-DAF6d2v2.css',
  '/sail-web-launch/assets/index-BxprknqM.js',
  '/sail-web-launch/favicon.ico',
  '/sail-web-launch/logo.svg',
  '/sail-web-launch/manifest.json'
];

// Install event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      }
    )
  );
});

// Activate event
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
}); 