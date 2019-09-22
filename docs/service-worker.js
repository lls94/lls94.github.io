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
    "revision": "22df5aedb48f697074bab2518910b733"
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
    "url": "assets/js/7.fc2a1fa5.js",
    "revision": "007a48bd63898ee6dfee660b74998c02"
  },
  {
    "url": "assets/js/8.36c52e9e.js",
    "revision": "8471e9703da5115516984b483c8069a7"
  },
  {
    "url": "assets/js/9.25a7233e.js",
    "revision": "05e74f61584d585f8c1029308bc93859"
  },
  {
    "url": "assets/js/app.42960399.js",
    "revision": "094a6df1ac543a7229d362d9e745b189"
  },
  {
    "url": "collectionWeb/entertainment/index.html",
    "revision": "5af2b861eaa6f2996360bcb4982ade14"
  },
  {
    "url": "collectionWeb/study/index.html",
    "revision": "68555686d4d61b5381a8bda03e97a57d"
  },
  {
    "url": "fanqiang/index.html",
    "revision": "a6903d8f0dccb433980ecc6449137cc5"
  },
  {
    "url": "flutter/index.html",
    "revision": "487047cb367b6dc270b842be83a7c02e"
  },
  {
    "url": "index.html",
    "revision": "ceac3e95dec71e5b35b5797a05b982a2"
  },
  {
    "url": "vsCode/index.html",
    "revision": "da4f013bdc499e68db0c8bea6340f0f0"
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
