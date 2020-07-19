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
    "revision": "2dcc0cb4faa9cc8377ead78cdd274b77"
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
    "url": "assets/js/10.4e49dd41.js",
    "revision": "7487b7ae1e8221ddf93589f7a2f56789"
  },
  {
    "url": "assets/js/11.4d43ead3.js",
    "revision": "2f80b0f73a875ec3e14467c7259740af"
  },
  {
    "url": "assets/js/12.594b3b1f.js",
    "revision": "d3757bba29ed797d382390cdb7b1f68e"
  },
  {
    "url": "assets/js/13.d16e91a1.js",
    "revision": "925a26a4f4cb18f344fb1c3f23828946"
  },
  {
    "url": "assets/js/14.420a1a75.js",
    "revision": "96677c19b16951ab426eb217350d0811"
  },
  {
    "url": "assets/js/15.7c0d47cd.js",
    "revision": "bc6c61c55d1e0f13c770ac3cbea3a8a3"
  },
  {
    "url": "assets/js/16.edf97552.js",
    "revision": "f935064aac8121af2399dbcdf0b22f7c"
  },
  {
    "url": "assets/js/17.02a712ba.js",
    "revision": "20730067b7753c1649fe6abafc9a9402"
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
    "url": "assets/js/4.5ccfd74c.js",
    "revision": "12c50f7533d5eac9c76fb69473d7958e"
  },
  {
    "url": "assets/js/5.a60eb420.js",
    "revision": "85103b3f3543a0ac276dc586cebe56f4"
  },
  {
    "url": "assets/js/6.fe98c38c.js",
    "revision": "057a05877946c946e7d53dba41e8440f"
  },
  {
    "url": "assets/js/7.62547736.js",
    "revision": "c8915ac2594e160f3a8a3690ade4f459"
  },
  {
    "url": "assets/js/8.59419d29.js",
    "revision": "20b1feffd7a23388f8a04009ead6e862"
  },
  {
    "url": "assets/js/9.7644895b.js",
    "revision": "f0632de18bd18b67b752c9d9de9b0770"
  },
  {
    "url": "assets/js/app.791d7ea7.js",
    "revision": "8b869919cfcc2c767dbe5aafecd6da78"
  },
  {
    "url": "index.html",
    "revision": "86368bfec9cd88ba5b44f2a8431795d8"
  },
  {
    "url": "pages/entertainment/index.html",
    "revision": "35d3b166b261ff8f0a498b03b0c4137b"
  },
  {
    "url": "pages/npm/index.html",
    "revision": "f203d33974243bd416a93444132fa786"
  },
  {
    "url": "pages/study/codeSnippet.html",
    "revision": "d2962e23781ead14daf465c8855b3596"
  },
  {
    "url": "pages/study/fanqiang.html",
    "revision": "1c25c7a28a2074c2e381d5cef29a1870"
  },
  {
    "url": "pages/study/flutter/index.html",
    "revision": "937c50317221cbbfeae1ada56ceac64b"
  },
  {
    "url": "pages/study/frontEnd/CSS.html",
    "revision": "76feaae41335b6d470b0df2ea907b550"
  },
  {
    "url": "pages/study/frontEnd/javaScript.html",
    "revision": "e11bfeac409f40a842e5f76103f9c95f"
  },
  {
    "url": "pages/study/frontEnd/web.html",
    "revision": "911764914ee48e4f458195edfae1a345"
  },
  {
    "url": "pages/study/index.html",
    "revision": "f70a86b0a22990cd22d7a813a913ea46"
  },
  {
    "url": "pages/study/vsCode.html",
    "revision": "f1b32bed04180f1c789af7a4bdecae1b"
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
