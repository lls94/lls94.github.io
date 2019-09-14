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
    "revision": "f438e97dc5658d959107bd2fb3c959b3"
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
    "url": "assets/js/10.670b99d8.js",
    "revision": "ee487b0ac599e9059435fd56cbe40579"
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
    "url": "assets/js/7.83a8633a.js",
    "revision": "a94b9d2f134a7e2c630009776424ee51"
  },
  {
    "url": "assets/js/8.005ec591.js",
    "revision": "d55c89edd24cd8f1056f04822c595aaa"
  },
  {
    "url": "assets/js/9.975ff4e9.js",
    "revision": "f3bc65761ad573df0d2de0b6e5ac14bb"
  },
  {
    "url": "assets/js/app.c90123df.js",
    "revision": "3e2403aa78808e901c58ccf538ec987f"
  },
  {
    "url": "collectionWeb/entertainment/index.html",
    "revision": "2bb7aff71a8e1dff7e6e83d485b69c2e"
  },
  {
    "url": "collectionWeb/study/index.html",
    "revision": "4164d1df477045feeae5bc4a1f07de47"
  },
  {
    "url": "fanqiang/index.html",
    "revision": "a8c1698a39bf3d75960d5c8283d9074f"
  },
  {
    "url": "index.html",
    "revision": "52448a0d1b7e3b0e153956723e65fad5"
  },
  {
    "url": "vsCode/index.html",
    "revision": "4ee853c321a0b9f8dbd864831ec3423c"
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
