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
    "revision": "1df573acc61eddbdfe6109cf66a726d9"
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
    "url": "assets/js/10.c30c7768.js",
    "revision": "3096ef0bd4d9adad68ea5f8f7c440705"
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
    "url": "assets/js/15.4c083e23.js",
    "revision": "59827ad41c8885985d3494cd151ccc0d"
  },
  {
    "url": "assets/js/16.05605116.js",
    "revision": "8ddf86b60aa3fbe4f9d17cbfc32d743f"
  },
  {
    "url": "assets/js/17.853f7cf4.js",
    "revision": "5d84845c4febe848c492dfd3ccb5d19d"
  },
  {
    "url": "assets/js/18.2e39c420.js",
    "revision": "6202a94c34acb40d51fe0d49e994d7c8"
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
    "url": "assets/js/4.d5a28691.js",
    "revision": "232f3fcc8f8c5382beb74e979ced2bc9"
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
    "url": "assets/js/9.013a158b.js",
    "revision": "94ea2807911bcd8d6242c23fbf529247"
  },
  {
    "url": "assets/js/app.33e3e17b.js",
    "revision": "91c2e6e32c9e8acc4324d4fbc763035e"
  },
  {
    "url": "index.html",
    "revision": "94005bbaeec6e6d6c1a357398d8e2c84"
  },
  {
    "url": "pages/entertainment/index.html",
    "revision": "815982ebce82ac3797f68fc613ac5a69"
  },
  {
    "url": "pages/npm/index.html",
    "revision": "98021ddcc3640e9fdd26b06cb70d8a15"
  },
  {
    "url": "pages/study/codeSnippet.html",
    "revision": "1acf9a58150ed80df5b6631fe01d7f3f"
  },
  {
    "url": "pages/study/fanqiang.html",
    "revision": "fb60750fdbccf167cfbc12c1a21c3aef"
  },
  {
    "url": "pages/study/flutter/index.html",
    "revision": "6e8dcfc7a7c95c88a3a5a9345dc4ed55"
  },
  {
    "url": "pages/study/frontEnd/CSS.html",
    "revision": "9c8f258404348a44928a9cea9a1765f6"
  },
  {
    "url": "pages/study/frontEnd/javaScript.html",
    "revision": "40291b3b6cd0ffe7fd6c1907d234f875"
  },
  {
    "url": "pages/study/frontEnd/web.html",
    "revision": "2c55cf85d7c269aecbadf7e30d16362e"
  },
  {
    "url": "pages/study/index.html",
    "revision": "11c8a979d2eac1b42abd5d3b612952ba"
  },
  {
    "url": "pages/study/vsCode.html",
    "revision": "0e08e35e33846958005e8bfa5034438e"
  },
  {
    "url": "pages/vsCode/index.html",
    "revision": "73f4cc20e2530a5f5c240d689873a403"
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
