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
    "revision": "5dbc7be8b7cb19b7357c070095c2c82c"
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
    "url": "assets/js/10.f58e1a85.js",
    "revision": "065678e3fd0cded575bde9b66c0b48c9"
  },
  {
    "url": "assets/js/11.9401c82c.js",
    "revision": "dddf64fa7d7194300038737853d752d9"
  },
  {
    "url": "assets/js/12.cb137c85.js",
    "revision": "51584efed09f1f5bfbc6e28a395ce823"
  },
  {
    "url": "assets/js/13.e3480af9.js",
    "revision": "df75f056953b03bc391d2341239aab2b"
  },
  {
    "url": "assets/js/14.09787400.js",
    "revision": "613e844a47693efeb868b4ce153cd7cb"
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
    "url": "assets/js/7.7afd2795.js",
    "revision": "640ef5a1070a38872eecdc0c905a6237"
  },
  {
    "url": "assets/js/8.35bf78de.js",
    "revision": "f6b3de9d6b8999a6376e7e703762e24e"
  },
  {
    "url": "assets/js/9.885f6a22.js",
    "revision": "4f8638a0b1d4832812001bda45802cff"
  },
  {
    "url": "assets/js/app.febff149.js",
    "revision": "315bae483e2197bb8dfc7bdde3793014"
  },
  {
    "url": "index.html",
    "revision": "33e148f60ced007549564374f37c3ebc"
  },
  {
    "url": "src/entertainment/index.html",
    "revision": "b1ee19fe891af19f2085b1fd3c1b173c"
  },
  {
    "url": "src/study/codeSnippet.html",
    "revision": "fb9155aa7298c238c751f5c8ed652876"
  },
  {
    "url": "src/study/fanqiang.html",
    "revision": "1cf12d96d2c035e13423e63c138170b7"
  },
  {
    "url": "src/study/flutter/index.html",
    "revision": "aa26dc627ed23d9fb6e4168e50da2f22"
  },
  {
    "url": "src/study/frontEnd/CSS.html",
    "revision": "abdac6a057375ab0eb8c2d8852cd7b4b"
  },
  {
    "url": "src/study/frontEnd/javaScript.html",
    "revision": "3cc06e32bb40660fc6725b083eca0cf4"
  },
  {
    "url": "src/study/frontEnd/web.html",
    "revision": "1cf1662b68d20f06dc94bda00683b48c"
  },
  {
    "url": "src/study/index.html",
    "revision": "0abc59b24e52de1ba34171d573c6536c"
  },
  {
    "url": "src/study/vsCode.html",
    "revision": "06aec769dc915ac6dd6e7042cc46dad8"
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
