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
    "revision": "6725ed610035c362679e46a368886f58"
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
    "url": "assets/js/11.a02d53fb.js",
    "revision": "1bbbcc80e1857d627614174ba29092f7"
  },
  {
    "url": "assets/js/12.35a012f8.js",
    "revision": "2e5607a812454ce2ec98fcfc52e82766"
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
    "url": "assets/js/4.685bfcbc.js",
    "revision": "76ac61fbad6a09efa3a55590f5de51c2"
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
    "url": "assets/js/app.0ccf2328.js",
    "revision": "d8871f086168334d49970ba5d1af835d"
  },
  {
    "url": "collectionWeb/entertainment/index.html",
    "revision": "08a6c2912eae1a5947704be1446b3575"
  },
  {
    "url": "collectionWeb/study/index.html",
    "revision": "4b03465e9e84e7b1c3c651d62bc8cc48"
  },
  {
    "url": "fanqiang/index.html",
    "revision": "72a51e92d16de15be03b5e6937596115"
  },
  {
    "url": "flutter/index.html",
    "revision": "d141aae58f4400d9bfe87b41b826182b"
  },
  {
    "url": "index.html",
    "revision": "87a44c7724890e9a462c5c36fad566f0"
  },
  {
    "url": "vsCode/index.html",
    "revision": "65cce2cc13088c3f2f0018d997a26174"
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
