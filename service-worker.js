self.addEventListener("install", event => {
    event.waitUntil(
      caches.open("v1").then(cache => {
        return cache.addAll([
          "/",
          "/index.html",
          "/estylos.css?v=2.0",
          "/scritp.js?v=2.0"
        ]);
      })
    );
  });
  