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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "9990b3033db000e511cbbe44f766278f"
  },
  {
    "url": "assets/css/0.styles.91b834e2.css",
    "revision": "6211cee0e7e2b8a386b4d5109e925614"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.1dcf7e55.js",
    "revision": "531e7efba64d825f3ac2f8f6c5d05c4a"
  },
  {
    "url": "assets/js/11.ca84c50b.js",
    "revision": "8c6416a71a920319aedc683d85a35204"
  },
  {
    "url": "assets/js/12.bd0d175f.js",
    "revision": "789914f0859f811bf81abe6ccb206c72"
  },
  {
    "url": "assets/js/13.a2f31deb.js",
    "revision": "782401e592bdc276f262ed862229e19b"
  },
  {
    "url": "assets/js/14.8bb60a33.js",
    "revision": "a1d6d99449bd9e5747eed732396a82ca"
  },
  {
    "url": "assets/js/15.8aa0b6e7.js",
    "revision": "a4c2811ea4b0d0e02e7c0efdb62c2c48"
  },
  {
    "url": "assets/js/16.139e718e.js",
    "revision": "5350e37a0b8967a12be3fe63030f7595"
  },
  {
    "url": "assets/js/2.0412bca3.js",
    "revision": "a51d16eedab4b5f24a812a731f536994"
  },
  {
    "url": "assets/js/3.59eb076c.js",
    "revision": "c68d80ef88ce3c172bc8e689fbccc1e8"
  },
  {
    "url": "assets/js/4.bb010346.js",
    "revision": "1927875313a38a481fb0a9a5a30017a2"
  },
  {
    "url": "assets/js/5.a60eb420.js",
    "revision": "85103b3f3543a0ac276dc586cebe56f4"
  },
  {
    "url": "assets/js/6.7e228562.js",
    "revision": "057a05877946c946e7d53dba41e8440f"
  },
  {
    "url": "assets/js/7.11ba44fb.js",
    "revision": "c8915ac2594e160f3a8a3690ade4f459"
  },
  {
    "url": "assets/js/8.0301e620.js",
    "revision": "bee7448c1a8c85734bb4d0ecce88423e"
  },
  {
    "url": "assets/js/9.65973fda.js",
    "revision": "5d7455f0c76c45a5a1c3691698bcc7de"
  },
  {
    "url": "assets/js/app.6b06c378.js",
    "revision": "1c499923e5ca10ded369c75b3a406653"
  },
  {
    "url": "index.html",
    "revision": "e79d72423f1b7854053af5c661d00a40"
  },
  {
    "url": "src/entertainment/index.html",
    "revision": "3af51c1a3c49e105b628aecf26139e60"
  },
  {
    "url": "src/study/codeSnippet.html",
    "revision": "fc0b5d66e4230d758ef23131f50dc1b5"
  },
  {
    "url": "src/study/fanqiang.html",
    "revision": "7b665c7fa9bce5db42bdbd4d8ed7695c"
  },
  {
    "url": "src/study/flutter/index.html",
    "revision": "cd700dffae69f3df9e7e96a4368e86ca"
  },
  {
    "url": "src/study/frontEnd/CSS.html",
    "revision": "1a0f2543155135de45cd0ea49c11c8fd"
  },
  {
    "url": "src/study/frontEnd/javaScript.html",
    "revision": "ad1177cf32a25da3883478bd2bdb296e"
  },
  {
    "url": "src/study/frontEnd/web.html",
    "revision": "8b79c45363ab39685161cda358ad5cfa"
  },
  {
    "url": "src/study/index.html",
    "revision": "5bb4f031dde9399762470f801c8067a6"
  },
  {
    "url": "src/study/vsCode.html",
    "revision": "dd97a6b0a8e85bb384f77c24573b3a73"
  }
].concat(self.__precacheManifest || []);
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
