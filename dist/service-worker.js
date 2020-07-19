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
    "revision": "b9222cb2a5847dc770dddf3479d897f7"
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
    "url": "assets/js/12.186688f0.js",
    "revision": "873359a069728f4e9cbc77367a140ab9"
  },
  {
    "url": "assets/js/13.a9d7a293.js",
    "revision": "ef93436eec526f09084de1492b5af93f"
  },
  {
    "url": "assets/js/14.420a1a75.js",
    "revision": "96677c19b16951ab426eb217350d0811"
  },
  {
    "url": "assets/js/15.7c0d47cd.js",
    "revision": "bc6c61c55d1e0f13c770ac3cbea3a8a3"
  },
  {
    "url": "assets/js/16.f11d55b7.js",
    "revision": "024d03bcd6f593ee08db1d38d4eaadd8"
  },
  {
    "url": "assets/js/17.02a712ba.js",
    "revision": "20730067b7753c1649fe6abafc9a9402"
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
    "url": "assets/js/4.5ccfd74c.js",
    "revision": "12c50f7533d5eac9c76fb69473d7958e"
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
    "url": "assets/js/8.67eef98c.js",
    "revision": "669ffe158c65e2a227eb36419390d38a"
  },
  {
    "url": "assets/js/9.013a158b.js",
    "revision": "94ea2807911bcd8d6242c23fbf529247"
  },
  {
    "url": "assets/js/app.22e157e3.js",
    "revision": "8e2811943668ae8d869356e1d60b338f"
  },
  {
    "url": "index.html",
    "revision": "12d024b6025f14e58fea00cfc95a8545"
  },
  {
    "url": "pages/entertainment/index.html",
    "revision": "54f8226dda5941f79475039726a9583d"
  },
  {
    "url": "pages/npm/index.html",
    "revision": "7cc69eb1baf3de5811941034efa4f9c0"
  },
  {
    "url": "pages/study/codeSnippet.html",
    "revision": "42f047d812ca7a034b8340cb70e30075"
  },
  {
    "url": "pages/study/fanqiang.html",
    "revision": "e93a1ca6674f5533edc5cb3759396d86"
  },
  {
    "url": "pages/study/flutter/index.html",
    "revision": "cbf223e4d0c014716c616e4320c2210a"
  },
  {
    "url": "pages/study/frontEnd/CSS.html",
    "revision": "d65027a3cc9fc9fbe666829cc875175e"
  },
  {
    "url": "pages/study/frontEnd/javaScript.html",
    "revision": "33421a7133d0a98d970f4c493dc8175c"
  },
  {
    "url": "pages/study/frontEnd/web.html",
    "revision": "7cfdb9ad1a63e8831fd7c0a22ffdf4bd"
  },
  {
    "url": "pages/study/index.html",
    "revision": "23e8ad1cdf04234845ca36466f35393a"
  },
  {
    "url": "pages/study/vsCode.html",
    "revision": "499f3fa292ecf1dcec8416ab6e3b3580"
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
