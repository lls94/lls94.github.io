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
    "revision": "473e8fc71ce9b831a88a4a0e00ed341b"
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
    "url": "assets/js/7.2067b1ac.js",
    "revision": "731b2e9435dfd641531ac01b4936e3f2"
  },
  {
    "url": "assets/js/8.de67edaa.js",
    "revision": "10a824f5808c680ce29ab68dd7a05357"
  },
  {
    "url": "assets/js/9.4eecb13c.js",
    "revision": "c178d73c63215521346b4cbcf6f87afd"
  },
  {
    "url": "assets/js/app.9d7d9f56.js",
    "revision": "a86b79a14d9f95f33010101b356a373e"
  },
  {
    "url": "collectionWeb/entertainment/index.html",
    "revision": "f76b180f9e31812c521c595019c92ec4"
  },
  {
    "url": "collectionWeb/study/index.html",
    "revision": "9dd498274b565f3de0b129fbf420dcb9"
  },
  {
    "url": "fanqiang/index.html",
    "revision": "b340a87143651656585eda086c2b5d75"
  },
  {
    "url": "index.html",
    "revision": "558ca98b48901f879ac95a0134439378"
  },
  {
    "url": "vsCode/index.html",
    "revision": "4d793f145a7d28de5a3ac5c8c733aea4"
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
