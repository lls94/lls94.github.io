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
    "revision": "cb0f98b3a8e77dfbc81e037135853537"
  },
  {
    "url": "assets/css/0.styles.22d3b194.css",
    "revision": "3a4de0805b2a64f6574bf84ace3b3454"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.54ea9ee9.js",
    "revision": "e0056326cbbf6117bdd8593fac42f822"
  },
  {
    "url": "assets/js/11.337a7def.js",
    "revision": "aeb14bd879fdd4d8ce92f10327363437"
  },
  {
    "url": "assets/js/12.8e5774e5.js",
    "revision": "8761b18bb47ab491b4593185c42d30f5"
  },
  {
    "url": "assets/js/13.67870656.js",
    "revision": "3c6cd62ab7cac65788bfa55eb8ee9527"
  },
  {
    "url": "assets/js/14.167e9122.js",
    "revision": "b3506199f7d4fb199f3d09d28971bd5c"
  },
  {
    "url": "assets/js/2.61f210fa.js",
    "revision": "ad155dda91df3785970ff4cd409f7cd0"
  },
  {
    "url": "assets/js/3.af3a48b6.js",
    "revision": "0bee534c664a7cbdcadd7467d2f06b64"
  },
  {
    "url": "assets/js/4.43723d3e.js",
    "revision": "a447d124938e36f8532a8e06bb8fd144"
  },
  {
    "url": "assets/js/5.aad8dc88.js",
    "revision": "d90db2e63d279696b825d2f49c0e59c9"
  },
  {
    "url": "assets/js/6.fd2ab088.js",
    "revision": "686e7418c96be82af38475abef39d0e3"
  },
  {
    "url": "assets/js/7.3125e153.js",
    "revision": "93fc9ac32d04814567124bbf88a82050"
  },
  {
    "url": "assets/js/8.02f1b49d.js",
    "revision": "f72b3a552812cdeb4c0d0204cbf6558a"
  },
  {
    "url": "assets/js/9.1b6c9f10.js",
    "revision": "f784e8dd63fbd7b2f95fba58a683c210"
  },
  {
    "url": "assets/js/app.bbff324e.js",
    "revision": "7fe007d10a4002789eb710de69ba8558"
  },
  {
    "url": "collectionWeb/entertainment/index.html",
    "revision": "41567f587f8fb9195cf4f5d5ae21e98a"
  },
  {
    "url": "collectionWeb/study/index.html",
    "revision": "af03169adab80bbe5eae1dd7fce89378"
  },
  {
    "url": "fanqiang/index.html",
    "revision": "a1c6d12df37e66f0e2809ef734dbb23a"
  },
  {
    "url": "flutter/index.html",
    "revision": "3ee8e3c8060852da89552c53d9f0ad60"
  },
  {
    "url": "frontEnd/CSS/index.html",
    "revision": "c415dd3c87f0f97a48faa107e7bf940b"
  },
  {
    "url": "frontEnd/javaScript/index.html",
    "revision": "14bbe268dcd047890c9fe2252175cbea"
  },
  {
    "url": "index.html",
    "revision": "63a887bafbdb309a3490bad9e17bfdf7"
  },
  {
    "url": "vsCode/index.html",
    "revision": "a2ba110ee4c89b1c1d4b06da5da11d93"
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
