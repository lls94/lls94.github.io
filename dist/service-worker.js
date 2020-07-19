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
    "revision": "fff406b19084176566bdb10a5d3dd97c"
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
    "url": "assets/js/11.1ed581ea.js",
    "revision": "63dbe3d5d78945d7e71fcf3c15a0a818"
  },
  {
    "url": "assets/js/12.7c8e4a89.js",
    "revision": "2eca860b0f0f48399d429fc3432638b2"
  },
  {
    "url": "assets/js/13.a2f31deb.js",
    "revision": "782401e592bdc276f262ed862229e19b"
  },
  {
    "url": "assets/js/14.8bb60a33.js",
    "revision": "a1d6d99449bd9e5747eed732396a82ca"
  },
  {
    "url": "assets/js/15.c2c745df.js",
    "revision": "af18540f0a9457875342cb2d35a4be82"
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
    "url": "assets/js/8.bdde6d90.js",
    "revision": "e708bbd78b4ac22db935cc15115b0afa"
  },
  {
    "url": "assets/js/9.8e520d87.js",
    "revision": "7d197c97658cbb426f362688ca41429e"
  },
  {
    "url": "assets/js/app.2215ee6f.js",
    "revision": "fe48f22233c889a998b3f360ad651f78"
  },
  {
    "url": "index.html",
    "revision": "35346aca1caa385969f6a42415fc8071"
  },
  {
    "url": "src/entertainment/index.html",
    "revision": "963ca86b96656558215837ca33f6fbca"
  },
  {
    "url": "src/study/codeSnippet.html",
    "revision": "780a32c2fba6a96b54fc45bfd0e25ee1"
  },
  {
    "url": "src/study/fanqiang.html",
    "revision": "695d6c4d4f56627d0bff9e93dc149ace"
  },
  {
    "url": "src/study/flutter/index.html",
    "revision": "eef90ad82f6077def424876c356a86a5"
  },
  {
    "url": "src/study/frontEnd/CSS.html",
    "revision": "ecbc93252d3ed6f6c60673e6d9f6c60a"
  },
  {
    "url": "src/study/frontEnd/javaScript.html",
    "revision": "a94ca7503864a51572e2277e22b6c41c"
  },
  {
    "url": "src/study/frontEnd/web.html",
    "revision": "250349d722c89396f5d3e8bda075f1b5"
  },
  {
    "url": "src/study/index.html",
    "revision": "592851581097b260b236898b9969ed29"
  },
  {
    "url": "src/study/vsCode.html",
    "revision": "b502cf9c1632d53dfd65e10d62a342b8"
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
