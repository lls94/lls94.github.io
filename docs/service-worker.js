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
    "revision": "178df565636ebdde5673b5b39335eff1"
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
    "url": "assets/js/3.dda69e4d.js",
    "revision": "a4d09fc79f427b5f3c2f1db3eb2d65df"
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
    "url": "assets/js/8.4237993d.js",
    "revision": "27012fa27a5eb87e5658bad9b1bd912e"
  },
  {
    "url": "assets/js/9.9f5311c0.js",
    "revision": "a6e2147d849f7e06de56b7a585933462"
  },
  {
    "url": "assets/js/app.c67b178c.js",
    "revision": "0f602a34056c7a2e80d758bce4da86ea"
  },
  {
    "url": "collectionWeb/entertainment/index.html",
    "revision": "d8d2882b52444c305751e69351b82cc8"
  },
  {
    "url": "collectionWeb/study/index.html",
    "revision": "689bc72610ebb1ce6f8a1099a1bcca50"
  },
  {
    "url": "index.html",
    "revision": "bf64effe868dc95cff10cdb48c5fc941"
  },
  {
    "url": "logo.jpg",
    "revision": "c7711ca6aad675412a521fd529b6e019"
  },
  {
    "url": "vsCode/index.html",
    "revision": "9bbdaf6bf95536bfbc0591aa40af8270"
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
