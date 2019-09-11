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
    "revision": "3f3624d5810c1ca63f931004c10ef4e3"
  },
  {
    "url": "assets/css/0.styles.bf21b36c.css",
    "revision": "9ec0e7ec0140c1db88d99a1144855d74"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.c7f77bef.js",
    "revision": "b6a6e92368f70b007948cb5b92dbc487"
  },
  {
    "url": "assets/js/3.acaf4028.js",
    "revision": "611a60851f84a5f7be7758450e4fb7f6"
  },
  {
    "url": "assets/js/4.26d55431.js",
    "revision": "65a4e7a7ce414fcc424bca8f0b91e47d"
  },
  {
    "url": "assets/js/5.05ed6547.js",
    "revision": "a06e9ca9920b2a9fa1875502674f1456"
  },
  {
    "url": "assets/js/6.19f008c1.js",
    "revision": "c0457f319a1fa0769694a90a79cd894b"
  },
  {
    "url": "assets/js/7.a30cbd31.js",
    "revision": "ac6e43bd2b1c6990523f2b0886e1f485"
  },
  {
    "url": "assets/js/8.ac99d9f5.js",
    "revision": "61fbb2a34f39273668ef735a5a006b61"
  },
  {
    "url": "assets/js/app.5222d16a.js",
    "revision": "af413f9489a112c7549741999a6315c6"
  },
  {
    "url": "collectionWeb/entertainment/index.html",
    "revision": "3f0ba690af27c2405286fe2c4a2603ea"
  },
  {
    "url": "collectionWeb/study/index.html",
    "revision": "15b6c5435035284bdcb15964b1c110fe"
  },
  {
    "url": "index.html",
    "revision": "3fc0c57d7fd9acfc5b95ea6c9ffb0a63"
  },
  {
    "url": "logo.jpg",
    "revision": "c7711ca6aad675412a521fd529b6e019"
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
