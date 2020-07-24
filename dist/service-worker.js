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
    "revision": "beff775c7d7cd9721109e73ff9675963"
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
    "url": "assets/js/10.d7066e15.js",
    "revision": "189e2033acb12ea45a63684f037df74d"
  },
  {
    "url": "assets/js/11.fe080052.js",
    "revision": "0d2d327d39f6911b1114cd11222fcc4d"
  },
  {
    "url": "assets/js/12.4fefd85e.js",
    "revision": "07090dae16386cf0f50ffbc382446628"
  },
  {
    "url": "assets/js/13.804c7de6.js",
    "revision": "c853996287c4f06b359546d4dd0be097"
  },
  {
    "url": "assets/js/14.22d0729b.js",
    "revision": "dece766cc106bfe9b3f9217dc57d79f7"
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
    "url": "assets/js/17.1f8c8409.js",
    "revision": "5b784e7085fef7ca794b635a2df67f83"
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
    "url": "assets/js/7.233557c9.js",
    "revision": "a63fd8c5a228f23bc01beaf7d5e73569"
  },
  {
    "url": "assets/js/8.bcc400b4.js",
    "revision": "6e69f34aa51e7cae44ca8015ffc94e32"
  },
  {
    "url": "assets/js/9.4b916ace.js",
    "revision": "6db2b1fb60844855e44b4638cfc7fee3"
  },
  {
    "url": "assets/js/app.e047549b.js",
    "revision": "1b0a0aa13f1e10545552b79dbc2c72d4"
  },
  {
    "url": "index.html",
    "revision": "cb0d15a24ea039dffa1534d778bded08"
  },
  {
    "url": "pages/entertainment/index.html",
    "revision": "3371eb760b7dcefaba5be35e62b98140"
  },
  {
    "url": "pages/npm/index.html",
    "revision": "a58c8eaf0ad0cc57c0fae75d8e52027c"
  },
  {
    "url": "pages/study/codeSnippet.html",
    "revision": "d28ccea34b904d7b8bbb763de7cdb2dd"
  },
  {
    "url": "pages/study/fanqiang.html",
    "revision": "47f5e4db3e6d257ed314944fa6d1ae1d"
  },
  {
    "url": "pages/study/flutter/index.html",
    "revision": "17710f63c550bb7f93f0c3ca282ecb5e"
  },
  {
    "url": "pages/study/frontEnd/CSS.html",
    "revision": "1a58f50e4b2d8fa060d0919c081ef060"
  },
  {
    "url": "pages/study/frontEnd/javaScript.html",
    "revision": "94a504afd72446f2cb66566bc2295de2"
  },
  {
    "url": "pages/study/frontEnd/web.html",
    "revision": "0d726da3680836bb261c237b196eede5"
  },
  {
    "url": "pages/study/index.html",
    "revision": "59a81debce6be99435f01facc71bc3b0"
  },
  {
    "url": "pages/study/vsCode.html",
    "revision": "4ba50f2f4fce60395374aa2cf02cf81a"
  },
  {
    "url": "pages/vsCode/index.html",
    "revision": "4b81820b5e279d8894ee24193369ecc7"
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
