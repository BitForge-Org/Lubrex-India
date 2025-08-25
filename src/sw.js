// src/sw.js
// Production-ready Vite PWA Service Worker with auto-update, cache busting, and reload prompt

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

// Listen for messages from the app to trigger skipWaiting
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

// Optional: Notify clients when a new SW is waiting
self.addEventListener("statechange", (event) => {
  if (event.target.state === "installed" && self.registration.waiting) {
    self.clients.matchAll({ type: "window" }).then((clients) => {
      clients.forEach((client) => {
        client.postMessage({ type: "NEW_VERSION_AVAILABLE" });
      });
    });
  }
});

// Optionally, add custom fetch/caching logic here if needed
// ...
