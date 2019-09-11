/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "973be958d2170ea0d38ac6a4114fba16"
  },
  {
    "url": "assets/css/0.styles.aebdfb8a.css",
    "revision": "fd755b1c945877f2f448ebc261822df2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.cd4abab3.js",
    "revision": "dd6cfc95da3958273dc8dba1227ca1d9"
  },
  {
    "url": "assets/js/3.57868bb1.js",
    "revision": "4648760205c9c0209acad1ea03dbad3b"
  },
  {
    "url": "assets/js/4.5f5527c6.js",
    "revision": "150dc3bce5ff5555bced796e90e9daf8"
  },
  {
    "url": "assets/js/5.387b7462.js",
    "revision": "dea1ad4b2d148fb5f7939a1fc3872812"
  },
  {
    "url": "assets/js/6.d130dbdc.js",
    "revision": "9c0d6f6482b4cb190aa258b4200a194e"
  },
  {
    "url": "assets/js/7.09704450.js",
    "revision": "e278b89773ea7b31d0279194bfbec6fb"
  },
  {
    "url": "assets/js/8.b298e960.js",
    "revision": "813f392e58c0a0e2e09db0918a84ff49"
  },
  {
    "url": "assets/js/app.90cb8712.js",
    "revision": "d51c3b20890a2a06ee33ad21d50103c3"
  },
  {
    "url": "collectionWeb/entertainment/index.html",
    "revision": "85d5651ca66484d691310ea9abf321a6"
  },
  {
    "url": "collectionWeb/study/index.html",
    "revision": "d60d0a10f3390a98e6cad47336acf703"
  },
  {
    "url": "index.html",
    "revision": "548e2a80f7fea05646fba01dbc48b9e1"
  },
  {
    "url": "logo.jpg",
    "revision": "c7711ca6aad675412a521fd529b6e019"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
