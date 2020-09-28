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
    "revision": "87608867c32247a2a645fa4d625163b6"
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
    "url": "assets/js/10.24c78cca.js",
    "revision": "ccf0d9a4ce2a6cb94a227777a8477f8e"
  },
  {
    "url": "assets/js/11.fefe9ac1.js",
    "revision": "63dbe3d5d78945d7e71fcf3c15a0a818"
  },
  {
    "url": "assets/js/12.20c762c4.js",
    "revision": "d9fa667685249df000e95d5b4d95c2ce"
  },
  {
    "url": "assets/js/13.361eb27b.js",
    "revision": "247d95f5cf060b239d5bc481a6114a72"
  },
  {
    "url": "assets/js/14.03d7d164.js",
    "revision": "ad0ca690e35984643044b22839179356"
  },
  {
    "url": "assets/js/15.2adb3f2b.js",
    "revision": "e98d66e27018150007cd908bb2bd4d99"
  },
  {
    "url": "assets/js/16.997d2945.js",
    "revision": "5507b38d9e3bad764ba74219dab7067f"
  },
  {
    "url": "assets/js/17.d93c7333.js",
    "revision": "fb3ce3b266624c6b3faec9263f4d62c7"
  },
  {
    "url": "assets/js/18.1e8b6a26.js",
    "revision": "d455f74ebe3603197477b74a4f9da2d7"
  },
  {
    "url": "assets/js/19.4797af16.js",
    "revision": "52019e1378e18172d8ba336457cb249e"
  },
  {
    "url": "assets/js/2.0412bca3.js",
    "revision": "a51d16eedab4b5f24a812a731f536994"
  },
  {
    "url": "assets/js/20.faee409a.js",
    "revision": "d0013886d6680ce3c79d89c5ec0915fa"
  },
  {
    "url": "assets/js/21.4a81dbdf.js",
    "revision": "30e711a216ec768e9d7eef6b47776a03"
  },
  {
    "url": "assets/js/22.884531f0.js",
    "revision": "1ada3943730443be0058a77d8740ce84"
  },
  {
    "url": "assets/js/23.e92e3a05.js",
    "revision": "16fcafbdc24f37c2caa441d7aa6b7576"
  },
  {
    "url": "assets/js/24.88e9faf1.js",
    "revision": "41f770c034101b8ec7264988c54a464f"
  },
  {
    "url": "assets/js/3.59eb076c.js",
    "revision": "c68d80ef88ce3c172bc8e689fbccc1e8"
  },
  {
    "url": "assets/js/4.6633e5dd.js",
    "revision": "66b37109a08b87e203c50c5c4112edd5"
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
    "url": "assets/js/7.48f398e2.js",
    "revision": "daa439f268b897a10f65c78fc27e3d05"
  },
  {
    "url": "assets/js/8.fc2a3bec.js",
    "revision": "103dd84b06403aa081244c6080ce3d07"
  },
  {
    "url": "assets/js/9.fc82473d.js",
    "revision": "284105b36bee73a59df88bcfc8d3cc11"
  },
  {
    "url": "assets/js/app.4a43e26b.js",
    "revision": "3e40895d8bd71e2fc3b08430143bb883"
  },
  {
    "url": "index.html",
    "revision": "9305fa937a7027bd7d1475fccfed2845"
  },
  {
    "url": "pages/course/fanqiang.html",
    "revision": "e2fb9f0d1ecbe570a2c1889bad3d81de"
  },
  {
    "url": "pages/course/verdaccio.html",
    "revision": "e5bf679cbdecdb8384fdeccb2c8c7fd5"
  },
  {
    "url": "pages/favorite/development.html",
    "revision": "defc8b062617fb9016b8c6471466ffec"
  },
  {
    "url": "pages/favorite/url.html",
    "revision": "4e02b1bfa82501e9887808baa324176e"
  },
  {
    "url": "pages/notes/flutter.html",
    "revision": "69a36171c4734963dd16c35b069260b2"
  },
  {
    "url": "pages/notes/git.html",
    "revision": "3c80e74e7265e8e60f4a5023553834b2"
  },
  {
    "url": "pages/notes/jenkins.html",
    "revision": "b29c690241a787730c8bd726e140c08f"
  },
  {
    "url": "pages/notes/nodemon.html",
    "revision": "3dfba2fa40dc581fed411a762c135eb1"
  },
  {
    "url": "pages/notes/npm.html",
    "revision": "34cef4f9f4b9a9ebc0e1855629f1188c"
  },
  {
    "url": "pages/notes/typescript.html",
    "revision": "24c27c2a9ce6fc9a96b0fc3cd68bf118"
  },
  {
    "url": "pages/notes/vsCode.html",
    "revision": "e3b5fcb422d72dd6dac93ea12da1f62a"
  },
  {
    "url": "pages/notes/webpack/loader.html",
    "revision": "98f005bba923605a403ef25afc31d68d"
  },
  {
    "url": "pages/study/codeSnippet.html",
    "revision": "b6b9f312183b5842e12e4b8b2ca0c052"
  },
  {
    "url": "pages/study/frontEnd/CSS.html",
    "revision": "aaf7e6268c3c102ea223d9180dd2ce48"
  },
  {
    "url": "pages/study/frontEnd/javaScript.html",
    "revision": "75a7d530b39f43574ae565558b12c465"
  },
  {
    "url": "pages/study/frontEnd/web.html",
    "revision": "cd5da2250dee1306f79c365ebcb033f2"
  },
  {
    "url": "pages/study/index.html",
    "revision": "fcc10a83a828f207e8306446d6b4a242"
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
