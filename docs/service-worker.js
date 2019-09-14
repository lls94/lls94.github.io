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
    "revision": "fac1b26fefcd9fc5517af45c102e665a"
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
    "url": "assets/js/9.16bac20e.js",
    "revision": "b2208b2fc6a388b88740a5d1e6eb026d"
  },
  {
    "url": "assets/js/app.fd0cb0c5.js",
    "revision": "6f004873f25dbaec1856ade271a3ce8f"
  },
  {
    "url": "collectionWeb/entertainment/index.html",
    "revision": "697ae01fdbd004c7848e6da3123dc8fc"
  },
  {
    "url": "collectionWeb/study/index.html",
    "revision": "db93af34bdba4676ced80dde89c3b571"
  },
  {
    "url": "fanqiang/index.html",
    "revision": "8d084c34f8312e60264b3930da928916"
  },
  {
    "url": "index.html",
    "revision": "39db681be4aea6d1598facabe252a814"
  },
  {
    "url": "vsCode/index.html",
    "revision": "dae0280acdd87e7b4f5ab5dfd1d849f7"
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
