'use strict';

console.log('Service Worker Started');
self.addEventListener('fetch', function (event) {
  console.log('ServiceWorker');
  console.log(event);
});
//# sourceMappingURL=service-worker.js.map