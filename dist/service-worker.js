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
    "revision": "1711307d6c4b38a76469601ada10ffc6"
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
    "url": "assets/js/10.f8d31876.js",
    "revision": "e6bc707aaba8a5a412e4f4708838beac"
  },
  {
    "url": "assets/js/11.46a289b9.js",
    "revision": "7bd7e3771e30642af00e8d8a20a06309"
  },
  {
    "url": "assets/js/12.2d9990cb.js",
    "revision": "2e3325f11f698216a56399435c425ee1"
  },
  {
    "url": "assets/js/13.2cd64830.js",
    "revision": "ae8241326c7e57381aeb03763ad857fe"
  },
  {
    "url": "assets/js/14.8c134c23.js",
    "revision": "2137f35912fb242680214eac45c4c988"
  },
  {
    "url": "assets/js/15.2adb3f2b.js",
    "revision": "e98d66e27018150007cd908bb2bd4d99"
  },
  {
    "url": "assets/js/16.6e806fb8.js",
    "revision": "d6a4d707acdf98c481d16c280d3ae550"
  },
  {
    "url": "assets/js/17.d93c7333.js",
    "revision": "fb3ce3b266624c6b3faec9263f4d62c7"
  },
  {
    "url": "assets/js/18.b93d7f84.js",
    "revision": "45ca8fbea5e729e7cfb3a4a8e1727052"
  },
  {
    "url": "assets/js/19.a2cf281f.js",
    "revision": "de493e2d544ad4cd571e04bb90e76876"
  },
  {
    "url": "assets/js/2.0412bca3.js",
    "revision": "a51d16eedab4b5f24a812a731f536994"
  },
  {
    "url": "assets/js/20.4a7efd15.js",
    "revision": "2f9aa74c6ac416564373b5242806949c"
  },
  {
    "url": "assets/js/21.615d1d9a.js",
    "revision": "4478384d7ed2e98342bce121d48a15ab"
  },
  {
    "url": "assets/js/22.c816edbf.js",
    "revision": "e78989e88994e8fac1b5686b49949bd9"
  },
  {
    "url": "assets/js/23.110badaf.js",
    "revision": "18bbdf311d56ec552059722768707a57"
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
    "url": "assets/js/8.0f6d3f08.js",
    "revision": "3cdff5d6d3712b95443d4cfead25ba18"
  },
  {
    "url": "assets/js/9.cd3cd6c9.js",
    "revision": "25e16dc436a781d5549958ab5eee9b1a"
  },
  {
    "url": "assets/js/app.94652cd5.js",
    "revision": "3b6212599075bd2f1f8c2c7a790342dc"
  },
  {
    "url": "index.html",
    "revision": "b1ac119ad4402da8bad91a0f5dde0a4e"
  },
  {
    "url": "pages/course/fanqiang.html",
    "revision": "82421ef1a0723bf486bb090aab2c46c8"
  },
  {
    "url": "pages/course/verdaccio.html",
    "revision": "836d905bff04b4f18599f632652e110d"
  },
  {
    "url": "pages/favorite/development.html",
    "revision": "ea90862a484f54ed8b3215ec99250563"
  },
  {
    "url": "pages/favorite/url.html",
    "revision": "a7d0c93bd4561a0ae8b03e7075a6abdd"
  },
  {
    "url": "pages/notes/flutter.html",
    "revision": "27688c6a17cdcdd304ee2a1d31578a7b"
  },
  {
    "url": "pages/notes/git.html",
    "revision": "4fc77017145bb952093678e824172c16"
  },
  {
    "url": "pages/notes/jenkins.html",
    "revision": "e7b2194574d86250e7c71a6857e383d8"
  },
  {
    "url": "pages/notes/nodemon.html",
    "revision": "86be06b14a2cae48853bb5ad0ac4b31a"
  },
  {
    "url": "pages/notes/npm.html",
    "revision": "40c104c166021a389ccf2d82f5b98c3f"
  },
  {
    "url": "pages/notes/typescript.html",
    "revision": "b3042f72309d1e8e9ea92e3b57ea327a"
  },
  {
    "url": "pages/notes/vsCode.html",
    "revision": "7ebc38ebc2c06c7df28a87c3f1f7193e"
  },
  {
    "url": "pages/notes/webpack/loader.html",
    "revision": "9c4b8c36a6672d2bd70b457f90dcc65b"
  },
  {
    "url": "pages/study/codeSnippet.html",
    "revision": "bb2a2e8cb6d44968a9d8dc0d4dfc5000"
  },
  {
    "url": "pages/study/frontEnd/CSS.html",
    "revision": "35aade2f13664fca33e176a43e884205"
  },
  {
    "url": "pages/study/frontEnd/javaScript.html",
    "revision": "d6bbc85757e7779cc197d7bcf69cd7a5"
  },
  {
    "url": "pages/study/frontEnd/web.html",
    "revision": "add67039a5c062876be5a81903e4aa2d"
  },
  {
    "url": "pages/study/index.html",
    "revision": "58e3cb6e4af71dc00ec109388dece3e1"
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
