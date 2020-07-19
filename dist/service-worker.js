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
    "revision": "abf62cb3e9613aaedb4073480c1ddc32"
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
    "url": "assets/js/11.72f97094.js",
    "revision": "44136f93c04cde8afff8e0abbc2f13df"
  },
  {
    "url": "assets/js/12.cb137c85.js",
    "revision": "51584efed09f1f5bfbc6e28a395ce823"
  },
  {
    "url": "assets/js/13.a3c8d634.js",
    "revision": "93436a2a9b022b102db233539ce4af03"
  },
  {
    "url": "assets/js/14.b247d452.js",
    "revision": "6834d2de6dc2769d80b9258b010f7dc3"
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
    "url": "assets/js/8.6ceb9ce7.js",
    "revision": "1652cf3eb70cff209a8f9636c8972b73"
  },
  {
    "url": "assets/js/9.04ae339c.js",
    "revision": "34aac695174218452d5d0ed342701f08"
  },
  {
    "url": "assets/js/app.d65a3857.js",
    "revision": "d29d6f8df7ccb93ae65f06f9cf819d20"
  },
  {
    "url": "index.html",
    "revision": "792d9f76e68df0ef4181258b7678beb3"
  },
  {
    "url": "src/entertainment/index.html",
    "revision": "b7e3b49f4836ffeac7cfc1224706ad22"
  },
  {
    "url": "src/study/codeSnippet.html",
    "revision": "b9a457a430faa22bf1f32a61c035c881"
  },
  {
    "url": "src/study/fanqiang.html",
    "revision": "b745deb8dc52a78d91dcfa9a1faa7863"
  },
  {
    "url": "src/study/flutter/index.html",
    "revision": "e85c532caa46cca3ec4cb5fdeba1803c"
  },
  {
    "url": "src/study/frontEnd/CSS.html",
    "revision": "170cbf242d01ae88a1317894ffd42b55"
  },
  {
    "url": "src/study/frontEnd/javaScript.html",
    "revision": "c9e732099a304e40956a1ce2c9ee6c02"
  },
  {
    "url": "src/study/frontEnd/web.html",
    "revision": "9f462286e46fc2de2a09f7c4445ef323"
  },
  {
    "url": "src/study/index.html",
    "revision": "2bdd26f9ac3b598b1f71da5428ffefb2"
  },
  {
    "url": "src/study/vsCode.html",
    "revision": "fac983f87a9426d0a333fed02e3ed6b2"
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
