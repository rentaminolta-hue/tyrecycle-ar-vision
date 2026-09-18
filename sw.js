const CACHE="tirecycle-ar-v1";
const CORE=["./","./index.html","./knowledge.json","./manifest.json","./sw.js"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener("activate",e=>e.waitUntil(self.clients.claim()));
self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return; const u=new URL(e.request.url); if(u.origin!==location.origin)return; e.respondWith(caches.match(e.request).then(c=>c||fetch(e.request).then(r=>{if(r.ok){const copy=r.clone();caches.open(CACHE).then(x=>x.put(e.request,copy));}return r}).catch(()=>caches.match("./index.html"))))});
