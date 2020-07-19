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
    "revision": "552240dfb53e0eab12bc7b13863a750e"
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
    "url": "assets/js/10.e10b517a.js",
    "revision": "255b996c2a8ba35315c7824bf4274416"
  },
  {
    "url": "assets/js/11.ed3f715e.js",
    "revision": "5acfb6883e8b6c74ffa9a7f465f87739"
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
    "url": "assets/js/15.8de0a0d8.js",
    "revision": "69acd2583d8e691ee9f90c360b77756b"
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
    "url": "assets/js/8.6ceb9ce7.js",
    "revision": "1652cf3eb70cff209a8f9636c8972b73"
  },
  {
    "url": "assets/js/9.04ae339c.js",
    "revision": "34aac695174218452d5d0ed342701f08"
  },
  {
    "url": "assets/js/app.db4c06aa.js",
    "revision": "b0b1b758989e564db15385faddaec356"
  },
  {
    "url": "index.html",
    "revision": "6acc6263f2cc718f18163f458e218f13"
  },
  {
    "url": "src/entertainment/index.html",
    "revision": "65da3a831fba07b8eafa98e6d7cfee27"
  },
  {
    "url": "src/study/codeSnippet.html",
    "revision": "6e1f758b3894d902537cf191a1197901"
  },
  {
    "url": "src/study/fanqiang.html",
    "revision": "2aa8743ab58469ff849b8ccd9d40c0e4"
  },
  {
    "url": "src/study/flutter/index.html",
    "revision": "29ecc3a08d832879f5143aa615fce562"
  },
  {
    "url": "src/study/frontEnd/CSS.html",
    "revision": "a452725039e119b7907e1c70779c5af5"
  },
  {
    "url": "src/study/frontEnd/javaScript.html",
    "revision": "ee09cfa099b3d9b142477e2c395d82bf"
  },
  {
    "url": "src/study/frontEnd/web.html",
    "revision": "f18e285cf79bf5ac13bfe7b8a051519b"
  },
  {
    "url": "src/study/index.html",
    "revision": "8328aec0d9db734e76216629f80c845b"
  },
  {
    "url": "src/study/vsCode.html",
    "revision": "39883c26ef30c27b10615ec3020388ef"
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
