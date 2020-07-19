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
    "revision": "139f6946322608e25327cda717912f7e"
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
    "url": "assets/js/10.f58e1a85.js",
    "revision": "065678e3fd0cded575bde9b66c0b48c9"
  },
  {
    "url": "assets/js/11.72f97094.js",
    "revision": "44136f93c04cde8afff8e0abbc2f13df"
  },
  {
    "url": "assets/js/12.cb137c85.js",
    "revision": "51584efed09f1f5bfbc6e28a395ce823"
  },
  {
    "url": "assets/js/13.e3480af9.js",
    "revision": "df75f056953b03bc391d2341239aab2b"
  },
  {
    "url": "assets/js/14.8bb60a33.js",
    "revision": "a1d6d99449bd9e5747eed732396a82ca"
  },
  {
    "url": "assets/js/15.8aa0b6e7.js",
    "revision": "a4c2811ea4b0d0e02e7c0efdb62c2c48"
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
    "url": "assets/js/app.2e18a8c1.js",
    "revision": "45ee67a52dd25b92905c785541c670c0"
  },
  {
    "url": "index.html",
    "revision": "88924597cd10aa5cadbc5d5d1d820fd7"
  },
  {
    "url": "src/entertainment/index.html",
    "revision": "530fe7d85cb24600e413bc9b2407e574"
  },
  {
    "url": "src/study/codeSnippet.html",
    "revision": "4d9be4a1d701e92fd6ba96071c6376ef"
  },
  {
    "url": "src/study/fanqiang.html",
    "revision": "98d83fe0c7e9d144e51408f6134a84fa"
  },
  {
    "url": "src/study/flutter/index.html",
    "revision": "9b5e3c77478776e3f8205f67d957fb6a"
  },
  {
    "url": "src/study/frontEnd/CSS.html",
    "revision": "cdc621d741982d1038c844b975d641f6"
  },
  {
    "url": "src/study/frontEnd/javaScript.html",
    "revision": "88ef188290863349e97faf4e27e28c05"
  },
  {
    "url": "src/study/frontEnd/web.html",
    "revision": "5b7c91387d2163a63929e19389865397"
  },
  {
    "url": "src/study/index.html",
    "revision": "6c4f2431437d1b42ea833176466dc487"
  },
  {
    "url": "src/study/vsCode.html",
    "revision": "f00e09198d30082db62dd9e8709a795a"
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
