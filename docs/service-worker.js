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
    "revision": "9b75ad4d9594397758816f0da98ea445"
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
    "url": "assets/js/10.7eca0fdf.js",
    "revision": "80e93ad1a2be77da37e50a2cc0747bc6"
  },
  {
    "url": "assets/js/11.0fe80d0d.js",
    "revision": "fa418b486a10993431a646284057dc35"
  },
  {
    "url": "assets/js/12.35a012f8.js",
    "revision": "2e5607a812454ce2ec98fcfc52e82766"
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
    "url": "assets/js/4.685bfcbc.js",
    "revision": "76ac61fbad6a09efa3a55590f5de51c2"
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
    "url": "assets/js/7.3125e153.js",
    "revision": "93fc9ac32d04814567124bbf88a82050"
  },
  {
    "url": "assets/js/8.02f1b49d.js",
    "revision": "f72b3a552812cdeb4c0d0204cbf6558a"
  },
  {
    "url": "assets/js/9.25a7233e.js",
    "revision": "05e74f61584d585f8c1029308bc93859"
  },
  {
    "url": "assets/js/app.b1d4f14c.js",
    "revision": "139fc4f2dcc380b3549542c0d3e180ae"
  },
  {
    "url": "collectionWeb/entertainment/index.html",
    "revision": "a9da81b1a0e90ad16c6aa90db9865958"
  },
  {
    "url": "collectionWeb/study/index.html",
    "revision": "7310e779a0dc3b5decbf43721cf65718"
  },
  {
    "url": "fanqiang/index.html",
    "revision": "caec9950a34dbc9c54927da1db74d0f8"
  },
  {
    "url": "flutter/index.html",
    "revision": "ffb087ea6646a2d9059f8d31049807a4"
  },
  {
    "url": "index.html",
    "revision": "5df1acb309d4b15f56b6e763cf5984b3"
  },
  {
    "url": "vsCode/index.html",
    "revision": "d326d6286fd8a9a3842e01ccce014da1"
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
