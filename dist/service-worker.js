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
    "revision": "6ceb417d24868cb20370d81f6934fbe0"
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
    "url": "assets/js/11.dcba4421.js",
    "revision": "95c45189c4430abea8e1e0ee37922797"
  },
  {
    "url": "assets/js/12.7b3b8c34.js",
    "revision": "60c83c9ab5d303c439c51a8c3b9cfd6f"
  },
  {
    "url": "assets/js/13.71c4df96.js",
    "revision": "af54aa3d0d14144ea97c061e8b604c9d"
  },
  {
    "url": "assets/js/14.6fe4ce26.js",
    "revision": "fa88b971f4512766c67eab549379fc25"
  },
  {
    "url": "assets/js/15.4c083e23.js",
    "revision": "59827ad41c8885985d3494cd151ccc0d"
  },
  {
    "url": "assets/js/16.730ffa84.js",
    "revision": "a4ee1fdf38cd1c3e1850241d238dab99"
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
    "url": "assets/js/7.62547736.js",
    "revision": "c8915ac2594e160f3a8a3690ade4f459"
  },
  {
    "url": "assets/js/8.59419d29.js",
    "revision": "20b1feffd7a23388f8a04009ead6e862"
  },
  {
    "url": "assets/js/9.013a158b.js",
    "revision": "94ea2807911bcd8d6242c23fbf529247"
  },
  {
    "url": "assets/js/app.2ee6e7df.js",
    "revision": "0758efbfc2816af85e967318f22d869f"
  },
  {
    "url": "index.html",
    "revision": "e1e92f4257f90661a66f400bee76f5cc"
  },
  {
    "url": "pages/entertainment/index.html",
    "revision": "b89fa505123e79b5226ca1339943cc17"
  },
  {
    "url": "pages/npm/index.html",
    "revision": "cfe9e42e9c99c01fbd3bc50037cf7e25"
  },
  {
    "url": "pages/study/codeSnippet.html",
    "revision": "9afca0b51bb61d7ac021dd5a123997d9"
  },
  {
    "url": "pages/study/fanqiang.html",
    "revision": "29690d2535375934682984b4e1980cdd"
  },
  {
    "url": "pages/study/flutter/index.html",
    "revision": "20d7ec90901b662d37985f01b92e216d"
  },
  {
    "url": "pages/study/frontEnd/CSS.html",
    "revision": "ef1d8ac8598d1d329a724353f374de7b"
  },
  {
    "url": "pages/study/frontEnd/javaScript.html",
    "revision": "153951a5cf1d237475e1894685e847b6"
  },
  {
    "url": "pages/study/frontEnd/web.html",
    "revision": "2bda9c712ba37c771dd03a24f99e45a4"
  },
  {
    "url": "pages/study/index.html",
    "revision": "fa211f22516c169f84cf04ec486d0a24"
  },
  {
    "url": "pages/study/vsCode.html",
    "revision": "4caf8d78fcfe25d896f7ae92237d9c68"
  },
  {
    "url": "pages/vsCode/index.html",
    "revision": "41f3f0ec96fd46090e717f3e8db0a297"
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
