importScripts('/_nuxt/workbox.476439e0.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "turbo-chan",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.dcf6e9683a040439f2f5.js",
    "revision": "31bbf77565d501b0bffd14d46981bf88"
  },
  {
    "url": "/_nuxt/common.df326bba7d1b65e6c9a8.js",
    "revision": "d960190d054898a46b81a03779011cbe"
  },
  {
    "url": "/_nuxt/layouts/default.e487e1565f36d87fd3a5.js",
    "revision": "21cb2e48d2ec479a1c34b06912e629a8"
  },
  {
    "url": "/_nuxt/manifest.142d2c82a4acb78b3f07.js",
    "revision": "9cc065ec218daf66dbcad9643f9174af"
  },
  {
    "url": "/_nuxt/pages/_board/_page.8fb2a2d096688fb123e8.js",
    "revision": "55f60efd03a8b0d0bebd31dd15e29410"
  },
  {
    "url": "/_nuxt/pages/_board/index.4420d711fe852a151f00.js",
    "revision": "70b32aae891dd475201e9b58a8c4bd41"
  },
  {
    "url": "/_nuxt/pages/_board/thread/_thread.99832dbfdc16e98d426f.js",
    "revision": "967c62592e6ca68d1798223d0d8acebc"
  },
  {
    "url": "/_nuxt/pages/about.094caecee9faf57be2fa.js",
    "revision": "342182bcee526987ee423c47f1fdb3dc"
  },
  {
    "url": "/_nuxt/pages/index.d66d572f4ee67e34618c.js",
    "revision": "c4e56d5e167b42db650fb93f44d984a3"
  },
  {
    "url": "/_nuxt/pages/search.29378800154e4058a580.js",
    "revision": "5bafdfc0b82543bf1677358b5ff99c19"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

