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
    "revision": "ceba3a0fd557027c25992972960928c8"
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
    "url": "assets/js/10.f09718b7.js",
    "revision": "a18d85983bcd69977d0c495ef56756a2"
  },
  {
    "url": "assets/js/11.e1cdaa8a.js",
    "revision": "2281955aad753cf1997e9e0e5ec9c26f"
  },
  {
    "url": "assets/js/12.5f6a6a58.js",
    "revision": "8761b18bb47ab491b4593185c42d30f5"
  },
  {
    "url": "assets/js/13.ad8b0222.js",
    "revision": "35d45c2044524b2de36a3d8f23accd5a"
  },
  {
    "url": "assets/js/14.fa15ab14.js",
    "revision": "7118986a973026af1bc00ed7fcaf8879"
  },
  {
    "url": "assets/js/15.0d751d3d.js",
    "revision": "7f9c9413c7dfeb7ef8fcbb42dd5d6004"
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
    "url": "assets/js/4.daa0238f.js",
    "revision": "b70793e35246771ec6fbc4e6e22f4619"
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
    "url": "assets/js/7.5a1d617f.js",
    "revision": "e146b469f4b751fde2d751b4c87e74ad"
  },
  {
    "url": "assets/js/8.f06213b0.js",
    "revision": "a2d5db92e79e3c2add61f86853dc637a"
  },
  {
    "url": "assets/js/9.3ef27013.js",
    "revision": "ef8f68194c4feb1999350c39c80287b7"
  },
  {
    "url": "assets/js/app.b45bfed4.js",
    "revision": "9aa66ab244306a84c3ea4999afef33e7"
  },
  {
    "url": "codeSnippet/index.html",
    "revision": "11bc466c1496feabb8bbc758ee7737f7"
  },
  {
    "url": "collectionWeb/entertainment/index.html",
    "revision": "d8fc10be3f931099b4a0242589151cde"
  },
  {
    "url": "collectionWeb/study/index.html",
    "revision": "baa349f3b89f7ee3cb905abbdb5d17d0"
  },
  {
    "url": "fanqiang/index.html",
    "revision": "bccdceb1a67fa4ce6bcef4aea3eac770"
  },
  {
    "url": "flutter/index.html",
    "revision": "7617ed9a9156fb82656fed0b7d55ca23"
  },
  {
    "url": "frontEnd/CSS/index.html",
    "revision": "6b4fede135a17e14dd1b884cab83264b"
  },
  {
    "url": "frontEnd/javaScript/index.html",
    "revision": "e31334fd2642bd94b792f32d7e2d2f1f"
  },
  {
    "url": "index.html",
    "revision": "f5b8c007e97e5d8a58851575f0e62924"
  },
  {
    "url": "vsCode/index.html",
    "revision": "5f8a44e3047b6b12f18c59e3d3d2add3"
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
