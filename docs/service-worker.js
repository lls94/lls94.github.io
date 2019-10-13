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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "60ad62391b43ce0a20d93e8e27d8da15"
  },
  {
    "url": "assets/css/0.styles.22d3b194.css",
    "revision": "3a4de0805b2a64f6574bf84ace3b3454"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d11d6f84.js",
    "revision": "fedbb0e1f65086d79be038bdd560125b"
  },
  {
    "url": "assets/js/11.dfd252c8.js",
    "revision": "2281955aad753cf1997e9e0e5ec9c26f"
  },
  {
    "url": "assets/js/12.24e45c2b.js",
    "revision": "1a035e3335dafd57f2441c3bb6cad940"
  },
  {
    "url": "assets/js/13.11f24e52.js",
    "revision": "35d45c2044524b2de36a3d8f23accd5a"
  },
  {
    "url": "assets/js/14.9ca503ed.js",
    "revision": "c69d6720a924635f66143db6616bc484"
  },
  {
    "url": "assets/js/15.49c8f628.js",
    "revision": "78921de5f6fbb96dd02a00700ba988bc"
  },
  {
    "url": "assets/js/16.aa2e0c00.js",
    "revision": "c7415a2d796d421bf93ef36df17615ea"
  },
  {
    "url": "assets/js/2.61f210fa.js",
    "revision": "ad155dda91df3785970ff4cd409f7cd0"
  },
  {
    "url": "assets/js/3.af3a48b6.js",
    "revision": "0bee534c664a7cbdcadd7467d2f06b64"
  },
  {
    "url": "assets/js/4.73921029.js",
    "revision": "7457fa74389f341347959ef5a53f1949"
  },
  {
    "url": "assets/js/5.aad8dc88.js",
    "revision": "d90db2e63d279696b825d2f49c0e59c9"
  },
  {
    "url": "assets/js/6.fd2ab088.js",
    "revision": "686e7418c96be82af38475abef39d0e3"
  },
  {
    "url": "assets/js/7.796bac7b.js",
    "revision": "93fc9ac32d04814567124bbf88a82050"
  },
  {
    "url": "assets/js/8.d29f9d59.js",
    "revision": "373302558dde8d9098a2ed45989e10d1"
  },
  {
    "url": "assets/js/9.ae04e05c.js",
    "revision": "ae88f2def29170e8adc5b45f9ffa307e"
  },
  {
    "url": "assets/js/app.cbea4435.js",
    "revision": "a6ab493cfe97a81acd4066be66cc5906"
  },
  {
    "url": "entertainment/index.html",
    "revision": "9f230513879f8e8d37cc7e89e511bb47"
  },
  {
    "url": "index.html",
    "revision": "3847c77052f9ef42862d6af0232a64d8"
  },
  {
    "url": "study/codeSnippet.html",
    "revision": "8a3f3db748e4a15794cceaf9a6e33aa6"
  },
  {
    "url": "study/fanqiang.html",
    "revision": "425b8712ff6111de0c8ef9ff9eb90f54"
  },
  {
    "url": "study/flutter/index.html",
    "revision": "0c7a006f6e9f99f930408ddb9afac641"
  },
  {
    "url": "study/frontEnd/CSS.html",
    "revision": "1d12f16afec89a3727886c796cacc8d9"
  },
  {
    "url": "study/frontEnd/javaScript.html",
    "revision": "d474a55cfee20d877b045b0a9385f309"
  },
  {
    "url": "study/frontEnd/web.html",
    "revision": "c45d01bd490f078524175ab64213a777"
  },
  {
    "url": "study/index.html",
    "revision": "5cc89e6f81289c0b0ae6aea7d8cd7135"
  },
  {
    "url": "study/vsCode.html",
    "revision": "75ebc15ceb69188397730bcc4b58c80b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
