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
    "revision": "ae951096c6136636b37cc790ea9224d9"
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
    "url": "assets/js/10.3b564dcd.js",
    "revision": "138c8a1f11a0a87f1c907802ec5f5617"
  },
  {
    "url": "assets/js/11.0f0443d9.js",
    "revision": "6874ba0b990edd9221b4899ae1c791fd"
  },
  {
    "url": "assets/js/2.61f210fa.js",
    "revision": "ad155dda91df3785970ff4cd409f7cd0"
  },
  {
    "url": "assets/js/3.7eae84d8.js",
    "revision": "be2e5391a500b060e201bf979e627e9f"
  },
  {
    "url": "assets/js/4.22b7cfb4.js",
    "revision": "61e0ca23aac448c9e21a4f0f394286d1"
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
    "url": "assets/js/7.fc2a1fa5.js",
    "revision": "007a48bd63898ee6dfee660b74998c02"
  },
  {
    "url": "assets/js/8.6fb86d29.js",
    "revision": "74e5468e8c7bc0a75ee82aedc7e31312"
  },
  {
    "url": "assets/js/9.b4086327.js",
    "revision": "c7984e820362ad1be2c48d17b6207a60"
  },
  {
    "url": "assets/js/app.533b7c93.js",
    "revision": "85757bf7f83975d7ba4ca3ce07deceb5"
  },
  {
    "url": "collectionWeb/entertainment/index.html",
    "revision": "9e4bc67b635e3d35d4f89024c4556b95"
  },
  {
    "url": "collectionWeb/study/index.html",
    "revision": "d198ac25e9923d3d56b526b96c2a229e"
  },
  {
    "url": "fanqiang/index.html",
    "revision": "d91e939f6b9e377f8d965acd47a1dee0"
  },
  {
    "url": "index.html",
    "revision": "679ffbafab4f26d4c3b204aa6f9f9cb3"
  },
  {
    "url": "vsCode/index.html",
    "revision": "17c3323f1cf0b60ae416ede5a56fc4ee"
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
