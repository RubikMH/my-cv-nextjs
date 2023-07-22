/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable no-var */
/* eslint-disable no-restricted-globals */
var CACHE_NAME = 'service-worker-for-rubikmh-v2'
var urlsToCache = ['/', '/favicon.ico']

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache')
      return cache.addAll(urlsToCache)
    }),
  )
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response
      }
      return fetch(event.request)
    }),
  )

  if (event.request.url.includes('_next')) {
    caches.open(CACHE_NAME).then((cache) => cache.add(event.request))
  }
})

self.addEventListener('activate', (event) => {
  var cacheAllowlist = [CACHE_NAME]

  event.waitUntil(
    caches.keys().then(
      (cacheNames) =>
        Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheAllowlist.indexOf(cacheName) === -1) {
              caches.delete(cacheName)
            }
          }),
        ),
      // eslint-disable-next-line function-paren-newline
    ),
  )
})
