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
    "revision": "ea4ff8870af4c1f7dba91f14456727ba"
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
    "url": "assets/js/7.83a8633a.js",
    "revision": "a94b9d2f134a7e2c630009776424ee51"
  },
  {
    "url": "assets/js/8.a599e8d1.js",
    "revision": "6c8e878c9d8820020af614bc185e1314"
  },
  {
    "url": "assets/js/9.b4086327.js",
    "revision": "c7984e820362ad1be2c48d17b6207a60"
  },
  {
    "url": "assets/js/app.c50c4a26.js",
    "revision": "7b9897dd743566c528f18fb1b7d58167"
  },
  {
    "url": "collectionWeb/entertainment/index.html",
    "revision": "cf2dc8fa80869270338976a6ef15f63f"
  },
  {
    "url": "collectionWeb/study/index.html",
    "revision": "4b741acb0782a41691521a46781182d1"
  },
  {
    "url": "fanqiang/index.html",
    "revision": "0636f8c5ba1f9ff195feb1eb4e10ca0d"
  },
  {
    "url": "index.html",
    "revision": "99f907d7e22fdea170fe87f64b797999"
  },
  {
    "url": "vsCode/index.html",
    "revision": "cf02dcff40dd4f2e3498560d5937373a"
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
