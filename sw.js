importScripts('/_nuxt/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/745a356a80fe8df9a787.js",
    "revision": "3261d102d7ffd8132dfeabaa944c1227"
  },
  {
    "url": "/_nuxt/be375f4b585d85a47bab.js",
    "revision": "3e8190d204d04a5a2a18354f4f6ab863"
  },
  {
    "url": "/_nuxt/f42fb8ee0a643d0ab600.js",
    "revision": "981772cec028a5b5ef259a3d5efb1ec7"
  },
  {
    "url": "/_nuxt/fbadd83cf6692ad86336.js",
    "revision": "6a4a9896bb9f4c07c2f666cdcf6626aa"
  }
], {
  "cacheId": "smoke-frontend",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')





