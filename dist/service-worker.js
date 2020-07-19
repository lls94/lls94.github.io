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
    "revision": "590a41c003a0148b85f42c613dbe1c0b"
  },
  {
    "url": "assets/css/0.styles.1ec9b833.css",
    "revision": "92021c2b792c85d9962c62de1bc73dbe"
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
    "url": "assets/js/13.e3480af9.js",
    "revision": "df75f056953b03bc391d2341239aab2b"
  },
  {
    "url": "assets/js/14.aecd08f0.js",
    "revision": "1196d697e16a5b77c9ed6a2a3b8eb546"
  },
  {
    "url": "assets/js/15.96ff34d0.js",
    "revision": "188b73339cc2e38365043838307afc5b"
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
    "url": "assets/js/app.95c26876.js",
    "revision": "9dec7886d39f1c03c089c087d0f1b634"
  },
  {
    "url": "index.html",
    "revision": "dc842523f4ada58c450fdbaaca2d6214"
  },
  {
    "url": "src/entertainment/index.html",
    "revision": "7eea11795b8c29af6d66712ba0998e18"
  },
  {
    "url": "src/study/codeSnippet.html",
    "revision": "33bfd785a9cdb64e02c7490646950336"
  },
  {
    "url": "src/study/fanqiang.html",
    "revision": "2122af47326e594073a7999ed7c1a48d"
  },
  {
    "url": "src/study/flutter/index.html",
    "revision": "a6a27e02741cce5b447f62c004782906"
  },
  {
    "url": "src/study/frontEnd/CSS.html",
    "revision": "2c94714a4ba6f9ab12691cabd1cf6543"
  },
  {
    "url": "src/study/frontEnd/javaScript.html",
    "revision": "d38b62cb12addbf0a1da32e614306bbc"
  },
  {
    "url": "src/study/frontEnd/web.html",
    "revision": "099cb915d45cb276a0954d0b2693623d"
  },
  {
    "url": "src/study/index.html",
    "revision": "38f494f5823042efe50138c0435c27f2"
  },
  {
    "url": "src/study/vsCode.html",
    "revision": "83d446c1acef8a024f5eefd8ec06fb4d"
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
