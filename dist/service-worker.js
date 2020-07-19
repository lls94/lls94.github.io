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
    "revision": "0ae1d48e2157a877c97ae89b5d220fd4"
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
    "url": "assets/js/10.11f9bab6.js",
    "revision": "183397b9f7bdcdfc200e104f3ee6e915"
  },
  {
    "url": "assets/js/11.72f97094.js",
    "revision": "44136f93c04cde8afff8e0abbc2f13df"
  },
  {
    "url": "assets/js/12.b0d7b7a5.js",
    "revision": "a4323611b6008846423a6306fbd43424"
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
    "url": "assets/js/15.8de0a0d8.js",
    "revision": "69acd2583d8e691ee9f90c360b77756b"
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
    "url": "assets/js/9.65973fda.js",
    "revision": "5d7455f0c76c45a5a1c3691698bcc7de"
  },
  {
    "url": "assets/js/app.a8d7c00f.js",
    "revision": "878cde3ebad1cb2b5eb693cf2b83ae98"
  },
  {
    "url": "index.html",
    "revision": "05daf886119bbe388bc61e8aa23440d8"
  },
  {
    "url": "src/entertainment/index.html",
    "revision": "882f701bd626bd8328ca2f33ea2f4e01"
  },
  {
    "url": "src/study/codeSnippet.html",
    "revision": "3517f640954231fd16657895c0f5457d"
  },
  {
    "url": "src/study/fanqiang.html",
    "revision": "f11785fd938fe14cd7e6f0ff31952926"
  },
  {
    "url": "src/study/flutter/index.html",
    "revision": "66242ef14740b89c7748c0a94f0f8555"
  },
  {
    "url": "src/study/frontEnd/CSS.html",
    "revision": "6ce8372a8012d977e734e0b6f0b406c1"
  },
  {
    "url": "src/study/frontEnd/javaScript.html",
    "revision": "fc259e5ed454da6d4c27a2ff89f9645f"
  },
  {
    "url": "src/study/frontEnd/web.html",
    "revision": "77e25d3b65e2529e699c0470815662c0"
  },
  {
    "url": "src/study/index.html",
    "revision": "d8838948f076ba4010f83a8d517cdfb2"
  },
  {
    "url": "src/study/vsCode.html",
    "revision": "b1b8f880d7e6f8158d84fcd5eb4cc4e2"
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
