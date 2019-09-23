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
    "revision": "2c8ca1f32b54933fcf6f62b5c3f0256d"
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
    "url": "assets/js/10.5863ae90.js",
    "revision": "5e25804ce71c73f68589ffde3a670008"
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
    "url": "assets/js/8.4addb9b7.js",
    "revision": "ae930e7a8ffa01c5448a0cfeb26cde63"
  },
  {
    "url": "assets/js/9.14421bd4.js",
    "revision": "fd240bdadb60f728a77624231e7febdb"
  },
  {
    "url": "assets/js/app.96351827.js",
    "revision": "6ea7e00a08ec5b372a8cc24253530d44"
  },
  {
    "url": "collectionWeb/entertainment/index.html",
    "revision": "0b6ba68af29a30b10b3793f8435d3036"
  },
  {
    "url": "collectionWeb/study/index.html",
    "revision": "eaef18f13e52d4fd3a906e29e4fbb33e"
  },
  {
    "url": "fanqiang/index.html",
    "revision": "59e72ef0da9884c2ae80ae1a169559da"
  },
  {
    "url": "flutter/index.html",
    "revision": "0dad6e05fa8a6bbf967eac21eff16f3b"
  },
  {
    "url": "index.html",
    "revision": "b53646443e0cd7b613f22b88d748f143"
  },
  {
    "url": "vsCode/index.html",
    "revision": "f8678ba8f7bb5ec75b0a44f660e62a0a"
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
