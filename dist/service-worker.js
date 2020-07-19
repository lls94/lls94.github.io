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
    "revision": "eb481b78dff14b080336b4361845121d"
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
    "url": "assets/js/11.72f97094.js",
    "revision": "44136f93c04cde8afff8e0abbc2f13df"
  },
  {
    "url": "assets/js/12.084566e9.js",
    "revision": "1a8ed596aa387247c3516f51b44c007c"
  },
  {
    "url": "assets/js/13.610088bd.js",
    "revision": "e97e2b90046cc43b754f9a4f8d50afd2"
  },
  {
    "url": "assets/js/14.aecd08f0.js",
    "revision": "1196d697e16a5b77c9ed6a2a3b8eb546"
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
    "url": "assets/js/8.6ceb9ce7.js",
    "revision": "1652cf3eb70cff209a8f9636c8972b73"
  },
  {
    "url": "assets/js/9.04ae339c.js",
    "revision": "34aac695174218452d5d0ed342701f08"
  },
  {
    "url": "assets/js/app.88953708.js",
    "revision": "0eb90663671c924d1835e70078dce678"
  },
  {
    "url": "index.html",
    "revision": "b97783a9d89d0a4f026a0d836e260dcc"
  },
  {
    "url": "src/entertainment/index.html",
    "revision": "44761ef19dbcfd30eee12af0263dd59d"
  },
  {
    "url": "src/study/codeSnippet.html",
    "revision": "9537baa7e525ee0cc936adae75013bd6"
  },
  {
    "url": "src/study/fanqiang.html",
    "revision": "4b7380fd165660e6de02c6fb2747287c"
  },
  {
    "url": "src/study/flutter/index.html",
    "revision": "53bc9fa6cf3edb29f529639dc3ca1ce2"
  },
  {
    "url": "src/study/frontEnd/CSS.html",
    "revision": "355fb7b68e6053453f85335a871a2202"
  },
  {
    "url": "src/study/frontEnd/javaScript.html",
    "revision": "5e5309b3343f3bd36bfe5d21ddf980c6"
  },
  {
    "url": "src/study/frontEnd/web.html",
    "revision": "e43309fdd7beb3ff940b9187078a4f72"
  },
  {
    "url": "src/study/index.html",
    "revision": "a048b48190416341ffb63ad68bb53e7d"
  },
  {
    "url": "src/study/vsCode.html",
    "revision": "326223df4812d36b959191752f223996"
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
