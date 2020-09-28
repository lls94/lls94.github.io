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
    "revision": "e0dae8bbfa15dc5c4a74bf748731f69c"
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
    "url": "assets/js/10.bb6d04e2.js",
    "revision": "1451818236849eac9616cb563b7c87e1"
  },
  {
    "url": "assets/js/11.f62fa021.js",
    "revision": "d12c881fd7e68651ae73b5a2ec1f9114"
  },
  {
    "url": "assets/js/12.6a49c855.js",
    "revision": "9716f0fb56e54fbc11db1db4d9510117"
  },
  {
    "url": "assets/js/13.2cd64830.js",
    "revision": "ae8241326c7e57381aeb03763ad857fe"
  },
  {
    "url": "assets/js/14.b8195bd0.js",
    "revision": "f86db8412fff2aed43048ef232806054"
  },
  {
    "url": "assets/js/15.fe7ce471.js",
    "revision": "ad4c42ec21dcac16cb2015de38bad75c"
  },
  {
    "url": "assets/js/16.6edd09cf.js",
    "revision": "6c98608193598dfe96c4a79d4780281b"
  },
  {
    "url": "assets/js/17.1253d3c7.js",
    "revision": "13755989b2f1a2e3f0cc85d99738fc5e"
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
    "url": "assets/js/20.64ed0db8.js",
    "revision": "d9960cd1dca8e7ba114c2c34c49d0722"
  },
  {
    "url": "assets/js/21.4ac7a844.js",
    "revision": "b468a5edb65c659f49f22ea2de951f41"
  },
  {
    "url": "assets/js/22.22f2c564.js",
    "revision": "fdee3227adc67170c6c174e21ee67f9b"
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
    "url": "assets/js/7.21876f50.js",
    "revision": "3b97fd84c9e2ceda46d6bb4c79a43e01"
  },
  {
    "url": "assets/js/8.985f0452.js",
    "revision": "fc49a0203c8c04af30b8234c7b7bb699"
  },
  {
    "url": "assets/js/9.cd3cd6c9.js",
    "revision": "25e16dc436a781d5549958ab5eee9b1a"
  },
  {
    "url": "assets/js/app.5330c55a.js",
    "revision": "14e90005f8669ea0fd56712805d449f0"
  },
  {
    "url": "index.html",
    "revision": "5c15c00f0495eec250e8b85f333ab17d"
  },
  {
    "url": "pages/course/fanqiang.html",
    "revision": "8696f484e7591d0ac816ce69b06a8aec"
  },
  {
    "url": "pages/course/verdaccio.html",
    "revision": "d4ac90f4ff058353e1e1f742b6e7c990"
  },
  {
    "url": "pages/favorite/development.html",
    "revision": "12ac12c912d08ec5fccf50d18c2b4532"
  },
  {
    "url": "pages/favorite/url.html",
    "revision": "206e42d70a4960ebac7a42a55af98e6b"
  },
  {
    "url": "pages/notes/flutter.html",
    "revision": "d0cd35161a9e16487f5a6bf81fa72009"
  },
  {
    "url": "pages/notes/git.html",
    "revision": "2940d4205dbc430ae0ca7d9898734e4f"
  },
  {
    "url": "pages/notes/jenkins.html",
    "revision": "b151699a03011680ecf8ace40dbb69a4"
  },
  {
    "url": "pages/notes/nodemon.html",
    "revision": "160dead77f0fb0cc499e8add534cfae3"
  },
  {
    "url": "pages/notes/npm.html",
    "revision": "2d2f6c050839248c87a8c52c25396923"
  },
  {
    "url": "pages/notes/typescript.html",
    "revision": "8b08f202f437b868ab689e9acea81f6f"
  },
  {
    "url": "pages/notes/vsCode.html",
    "revision": "8f432e6fd4ec209a45713020ede59e23"
  },
  {
    "url": "pages/notes/webpack/loader.html",
    "revision": "2812455d3786988ae628b2e315e9d00f"
  },
  {
    "url": "pages/study/codeSnippet.html",
    "revision": "7e6a8f63f8bcad638e50d79f7a474918"
  },
  {
    "url": "pages/study/frontEnd/CSS.html",
    "revision": "053327ae2be80908cfd32f6d79b42c9c"
  },
  {
    "url": "pages/study/frontEnd/javaScript.html",
    "revision": "5934f0a879237c105f16bd37c96c16f1"
  },
  {
    "url": "pages/study/frontEnd/web.html",
    "revision": "60cef7d13018e8af8e2b32850ad0602e"
  },
  {
    "url": "pages/study/index.html",
    "revision": "e5f84e0d5c1fc9cd64ca914a1b8f3c88"
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
