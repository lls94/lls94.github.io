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
    "revision": "d585e463a7dd44d2430becfc6076255f"
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
    "url": "assets/js/10.384a1d98.js",
    "revision": "7dc435d101876df971872d2393eaabd6"
  },
  {
    "url": "assets/js/11.5af36bdb.js",
    "revision": "aedc88a08694ca523763f94bcf1ff61c"
  },
  {
    "url": "assets/js/12.24e45c2b.js",
    "revision": "1a035e3335dafd57f2441c3bb6cad940"
  },
  {
    "url": "assets/js/13.2bf16067.js",
    "revision": "3f4a0facf1cf84a63cbfe38826f5729c"
  },
  {
    "url": "assets/js/14.252d2c9b.js",
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
    "url": "assets/js/7.46a0364f.js",
    "revision": "958e9f6da7d2c3101c3e27e72b79d222"
  },
  {
    "url": "assets/js/8.d4df10c4.js",
    "revision": "e7158a1ac6efe82cc106afff9d49ddc1"
  },
  {
    "url": "assets/js/9.8b573770.js",
    "revision": "675b80ba7d49834ea840ebd334dca44b"
  },
  {
    "url": "assets/js/app.5b38f113.js",
    "revision": "a8988c9c6fd8930a37a197862aa726d8"
  },
  {
    "url": "entertainment/index.html",
    "revision": "6222e5dcb084faccb9fbdb1025b02adc"
  },
  {
    "url": "index.html",
    "revision": "999d416f0f3c239db788f260b2d52faa"
  },
  {
    "url": "study/codeSnippet.html",
    "revision": "f15f07fd3d73666339b9af0f11323497"
  },
  {
    "url": "study/fanqiang.html",
    "revision": "23d0c4b2e31a216daca1352865f8a8f7"
  },
  {
    "url": "study/flutter/index.html",
    "revision": "9ef09f961a83f921471627f9fa442e8d"
  },
  {
    "url": "study/frontEnd/CSS.html",
    "revision": "fae552fdca55a5f1eef3e7bd7c053bb8"
  },
  {
    "url": "study/frontEnd/javaScript.html",
    "revision": "b77e6e227c3fe316223feeccfa6df567"
  },
  {
    "url": "study/index.html",
    "revision": "5609a695f2864926b13825c36f6a4958"
  },
  {
    "url": "study/vsCode.html",
    "revision": "6afc7a6a5d9cf3bd9d380fd632748d2b"
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
