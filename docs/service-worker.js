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
    "revision": "f03b9e84c07ec7a6c49a45ad26027045"
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
    "url": "assets/js/12.78ee08f7.js",
    "revision": "8761b18bb47ab491b4593185c42d30f5"
  },
  {
    "url": "assets/js/13.97e4ec89.js",
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
    "url": "assets/js/app.f2abf43c.js",
    "revision": "31e3846e62a961e8ded5bff129d724d6"
  },
  {
    "url": "entertainment/index.html",
    "revision": "f3f1948292640d9ed83bee5381f0c29d"
  },
  {
    "url": "index.html",
    "revision": "bc6f1d3662555a7b11d5be74828285ae"
  },
  {
    "url": "study/codeSnippet.html",
    "revision": "329745f19591b8b92f8f208e7deb758f"
  },
  {
    "url": "study/fanqiang.html",
    "revision": "8c68baaba5b01c7db53bacf7f2882625"
  },
  {
    "url": "study/flutter/index.html",
    "revision": "a29e7eb029599d1c3daa03ee0c9fc95c"
  },
  {
    "url": "study/frontEnd/CSS/index.html",
    "revision": "cfcea47377e3ada5973a6a913c73bca2"
  },
  {
    "url": "study/frontEnd/javaScript/index.html",
    "revision": "c2352d506e1d2e3210b7bce748ff3fb8"
  },
  {
    "url": "study/index.html",
    "revision": "c14f86d0ca15802dc34d98997cf2feb4"
  },
  {
    "url": "study/vsCode.html",
    "revision": "e24d7115e1cfcd6f997f92de5392288c"
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
