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
    "revision": "28902446c67e9ea5f04dc1c82ab3f706"
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
    "url": "assets/js/10.2c749de1.js",
    "revision": "76cc673d7034bc1c04ba218ee1198269"
  },
  {
    "url": "assets/js/11.6bb6e82c.js",
    "revision": "c3d305d7d7caf09347297d198f9344b8"
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
    "url": "assets/js/7.c62c7f5a.js",
    "revision": "640ef5a1070a38872eecdc0c905a6237"
  },
  {
    "url": "assets/js/8.6e25407c.js",
    "revision": "1fb4c9e48db47a7593e542b6f0122b97"
  },
  {
    "url": "assets/js/9.8cd9f163.js",
    "revision": "10512fc2336ae4cb8907dc8e72026fed"
  },
  {
    "url": "assets/js/app.20b58f98.js",
    "revision": "07e99da536eef5cba6c27be1feb0e54f"
  },
  {
    "url": "index.html",
    "revision": "73ca4a54df31d5916179a5a6b6e80206"
  },
  {
    "url": "pages/entertainment/index.html",
    "revision": "53923fec49422e447dadec190a0b1523"
  },
  {
    "url": "pages/npm/index.html",
    "revision": "2ccb8122469b04f6e4a5bd13a01e3ec0"
  },
  {
    "url": "pages/study/codeSnippet.html",
    "revision": "3856e2a9b2e2686bc12361b733849ab2"
  },
  {
    "url": "pages/study/fanqiang.html",
    "revision": "bdaf4456b92d2af29b1b0279ae9c8945"
  },
  {
    "url": "pages/study/flutter/index.html",
    "revision": "171d8319ef1bc6b6fb8f5cfc81394aff"
  },
  {
    "url": "pages/study/frontEnd/CSS.html",
    "revision": "58200c9c86183a778c225f5dc960dfb0"
  },
  {
    "url": "pages/study/frontEnd/javaScript.html",
    "revision": "4b10b92656e9a9b218e21610cbaa72bc"
  },
  {
    "url": "pages/study/frontEnd/web.html",
    "revision": "56559a44222e7656d39109603bb9371b"
  },
  {
    "url": "pages/study/index.html",
    "revision": "62c4757c936fba2ee18f88bc55a8d822"
  },
  {
    "url": "pages/study/vsCode.html",
    "revision": "5630c8d50fe120e8551b06fdf2cffc3a"
  },
  {
    "url": "pages/vsCode/index.html",
    "revision": "c851d9a61e44b7ef8ffa9d19707a3ca8"
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
