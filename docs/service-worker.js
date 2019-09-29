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
    "revision": "827c1297b83ccacb5deafce857d4a4be"
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
    "url": "assets/js/10.e288f46e.js",
    "revision": "a18d85983bcd69977d0c495ef56756a2"
  },
  {
    "url": "assets/js/11.dfd252c8.js",
    "revision": "2281955aad753cf1997e9e0e5ec9c26f"
  },
  {
    "url": "assets/js/12.24e45c2b.js",
    "revision": "1a035e3335dafd57f2441c3bb6cad940"
  },
  {
    "url": "assets/js/13.11f24e52.js",
    "revision": "35d45c2044524b2de36a3d8f23accd5a"
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
    "url": "assets/js/7.796bac7b.js",
    "revision": "93fc9ac32d04814567124bbf88a82050"
  },
  {
    "url": "assets/js/8.5c0ccc9e.js",
    "revision": "f72b3a552812cdeb4c0d0204cbf6558a"
  },
  {
    "url": "assets/js/9.d4a25b62.js",
    "revision": "1e951803af7c8e8cd5846d21a97a3439"
  },
  {
    "url": "assets/js/app.c4c911ab.js",
    "revision": "a27f5850626f8b6471f83a8b77c9c7cd"
  },
  {
    "url": "entertainment/index.html",
    "revision": "86f7d061cb98a796ce175c58cfe479ca"
  },
  {
    "url": "index.html",
    "revision": "e2ba273c5c34fc0698500e10901f85fe"
  },
  {
    "url": "study/codeSnippet.html",
    "revision": "f20a3402f55164bab83486521a4d8185"
  },
  {
    "url": "study/fanqiang.html",
    "revision": "31829dc16eb3955dc68ff7cf32b10744"
  },
  {
    "url": "study/flutter/index.html",
    "revision": "dd9ca827517b6ef34367608180bafce6"
  },
  {
    "url": "study/frontEnd/CSS.html",
    "revision": "64dd872a67a6e05972b72d4751936910"
  },
  {
    "url": "study/frontEnd/javaScript.html",
    "revision": "21d4f7896ad36362c175eb9ff51d01ac"
  },
  {
    "url": "study/index.html",
    "revision": "86d59784d38c5e5a6ff4700443e011f4"
  },
  {
    "url": "study/vsCode.html",
    "revision": "3b558f4d198d5211bcfaf96cc954bb87"
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
