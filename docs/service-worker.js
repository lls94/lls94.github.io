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
    "revision": "1a5924f8b1a18af66a432c6dfbaeaced"
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
    "url": "assets/js/10.cb70f63f.js",
    "revision": "0f722b2900c7904398333803d09ff2b2"
  },
  {
    "url": "assets/js/11.a02d53fb.js",
    "revision": "1bbbcc80e1857d627614174ba29092f7"
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
    "url": "assets/js/7.fc2a1fa5.js",
    "revision": "007a48bd63898ee6dfee660b74998c02"
  },
  {
    "url": "assets/js/8.36c52e9e.js",
    "revision": "8471e9703da5115516984b483c8069a7"
  },
  {
    "url": "assets/js/9.14421bd4.js",
    "revision": "fd240bdadb60f728a77624231e7febdb"
  },
  {
    "url": "assets/js/app.779a8134.js",
    "revision": "77adb20bb19436e6b1fee919bf0b745d"
  },
  {
    "url": "collectionWeb/entertainment/index.html",
    "revision": "1dea2c0c31b695287b72d412cbee4642"
  },
  {
    "url": "collectionWeb/study/index.html",
    "revision": "4bfda0d13d08f8014d969daae9efa038"
  },
  {
    "url": "fanqiang/index.html",
    "revision": "0cc8ebb7e7d1e61c44761262e1dddb78"
  },
  {
    "url": "flutter/index.html",
    "revision": "f4ff9217cf103bda54de81ed71755171"
  },
  {
    "url": "index.html",
    "revision": "2e00be45f7bef5227d805f5608aea6ec"
  },
  {
    "url": "vsCode/index.html",
    "revision": "650ef21cf49955f55b3f043f7c79ea74"
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
