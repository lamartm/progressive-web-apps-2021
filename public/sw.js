const staticCache = "static-site-v13";
const dynamicCache = "dynamic-cache-v34";
const assets = [
  "images/curiosity.jpg",
  "images/opp.jpg",
  "images/perseverance.jpg",
  "images/spirit.jpg",
  "/",
  "js/api.js",
  "/offline",
];
self.addEventListener("install", (event) => {
  // console.log('service worker installed')
  event.waitUntil(
    caches.open(staticCache).then((cache) => {
      console.log("caching");
      cache.addAll(assets);
    })
  );
});

self.addEventListener("activate", (event) => {
  // console.log('service worker activated')
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== staticCache && key !== dynamicCache)
          .map((key) => caches.delete(key))
      );
    })
  );
});

self.addEventListener("fetch", (event) => {
  // console.log('service worker fetch', event)
  event.respondWith(
    caches
      .match(event.request)
      .then((cacheRes) => {
        return (
          cacheRes ||
          fetch(event.request).then((fetchRes) => {
            return caches
              .open(dynamicCache)

              .then((cache) => {
                cache.put(event.request.url, fetchRes.clone());
                return fetchRes;
              });
          })
        );
      })
      .catch((err) => {
        return caches.match("/offline");
      })
  );
});
