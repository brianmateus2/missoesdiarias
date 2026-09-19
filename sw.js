// Service worker mínimo: existe só para o Chrome oferecer "Instalar app".
// Não guarda nada em cache, então atualizações do site aparecem normalmente.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (e.request.mode === 'navigate') e.respondWith(fetch(e.request));
});
