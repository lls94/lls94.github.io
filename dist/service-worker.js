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
    "revision": "308f1ecdacb43e0e794e447c6d769f9b"
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
    "url": "assets/js/11.ca84c50b.js",
    "revision": "8c6416a71a920319aedc683d85a35204"
  },
  {
    "url": "assets/js/12.8fb212b0.js",
    "revision": "4bcd781e45005d3f0a3c53959364417e"
  },
  {
    "url": "assets/js/13.610088bd.js",
    "revision": "e97e2b90046cc43b754f9a4f8d50afd2"
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
    "url": "assets/js/app.194ce629.js",
    "revision": "91021a8cba834f078d7f9ed5c11a9214"
  },
  {
    "url": "index.html",
    "revision": "d7fe3f7914b4534784b51f535f83f12c"
  },
  {
    "url": "src/entertainment/index.html",
    "revision": "2b7174076aa5f0153a18f0c992937609"
  },
  {
    "url": "src/study/codeSnippet.html",
    "revision": "8e5312960c698e2f443950305b04e68e"
  },
  {
    "url": "src/study/fanqiang.html",
    "revision": "c9a066e6faf67b0e17261c35d69f9263"
  },
  {
    "url": "src/study/flutter/index.html",
    "revision": "b9df062ba4a1540a6c6d829141d0f6bf"
  },
  {
    "url": "src/study/frontEnd/CSS.html",
    "revision": "786aedf2ee53ae35c5871bb1b38ac3ee"
  },
  {
    "url": "src/study/frontEnd/javaScript.html",
    "revision": "0046b2b538997bcc33e525a853c3a2d6"
  },
  {
    "url": "src/study/frontEnd/web.html",
    "revision": "28e2f6474cd449d5e0c1e936ee09be96"
  },
  {
    "url": "src/study/index.html",
    "revision": "782a54514cb3f02f794fe18619da14e6"
  },
  {
    "url": "src/study/vsCode.html",
    "revision": "5e692c54d17133ce80405e92ce0c4954"
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
