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
    "revision": "c9ac2472cf9f0d8041f3b13fe20e6711"
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
    "url": "assets/js/10.df95f8e6.js",
    "revision": "de388999c8cf590518a6f96dc325700a"
  },
  {
    "url": "assets/js/11.d4e1f1b7.js",
    "revision": "2d2da3dbc3f44c20b0af895fea5c4372"
  },
  {
    "url": "assets/js/12.5f6a6a58.js",
    "revision": "8761b18bb47ab491b4593185c42d30f5"
  },
  {
    "url": "assets/js/13.95a1eb4d.js",
    "revision": "a333d135ac89ea6b7608309c546d8257"
  },
  {
    "url": "assets/js/14.395df3d1.js",
    "revision": "c3e1b8af5b8f87159b8372360e30c4a7"
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
    "url": "assets/js/app.09df1a20.js",
    "revision": "2160ba9e28953bc3c94d33c0a3fc1636"
  },
  {
    "url": "codeSnippet/index.html",
    "revision": "f3b3c0bbb161ddba8a329d700f382793"
  },
  {
    "url": "collectionWeb/entertainment/index.html",
    "revision": "cf1008ae486980bfebb60c7e8a1dd647"
  },
  {
    "url": "collectionWeb/study/index.html",
    "revision": "aa8fea57aa0c90901c30c79da81d512d"
  },
  {
    "url": "fanqiang/index.html",
    "revision": "ae4ee030c8239d782002aaa7c46d0d8d"
  },
  {
    "url": "flutter/index.html",
    "revision": "4bb56c949f8d327f17f8ea545a55e6ba"
  },
  {
    "url": "frontEnd/CSS/index.html",
    "revision": "bf8902e21811c9b80750b81877494a95"
  },
  {
    "url": "frontEnd/javaScript/index.html",
    "revision": "e8007a9258910e177eaceeec8dcc9fe1"
  },
  {
    "url": "index.html",
    "revision": "62c3728ec161bb88d29606e6c1b921b8"
  },
  {
    "url": "vsCode/index.html",
    "revision": "4f6a9a3fc1ea8ecf7b3d315a65696443"
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
