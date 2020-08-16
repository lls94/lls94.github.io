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
    "revision": "dccf31faaf17c26a48790defc1fc2464"
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
    "url": "assets/js/10.749e508a.js",
    "revision": "5600dddf66e6024bd123532a90e43824"
  },
  {
    "url": "assets/js/11.d41675eb.js",
    "revision": "44136f93c04cde8afff8e0abbc2f13df"
  },
  {
    "url": "assets/js/12.ebca924c.js",
    "revision": "a5da91690f3d91e9eac1bc3ee8ef1757"
  },
  {
    "url": "assets/js/13.b979eea9.js",
    "revision": "e641f7e363e170b1c2c75eeeb3e4353a"
  },
  {
    "url": "assets/js/14.b9f059c3.js",
    "revision": "e6afea9c040d42bcb53106810cfef2f8"
  },
  {
    "url": "assets/js/15.fe7ce471.js",
    "revision": "ad4c42ec21dcac16cb2015de38bad75c"
  },
  {
    "url": "assets/js/16.74f41c9c.js",
    "revision": "c55a70feee66f37a1a1a19a4b3357164"
  },
  {
    "url": "assets/js/17.280ded29.js",
    "revision": "0bbfb04c957ad4ad0a48beef54d53b3d"
  },
  {
    "url": "assets/js/18.7374b354.js",
    "revision": "91388e9942b9466c806e7e107d3f2a58"
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
    "url": "assets/js/20.64ed0db8.js",
    "revision": "d9960cd1dca8e7ba114c2c34c49d0722"
  },
  {
    "url": "assets/js/21.4ac7a844.js",
    "revision": "b468a5edb65c659f49f22ea2de951f41"
  },
  {
    "url": "assets/js/22.06b74441.js",
    "revision": "e6ca557db187df86027e05475d82448b"
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
    "url": "assets/js/7.bc424e6f.js",
    "revision": "25593b990773bdb0d9eb61995261e148"
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
    "url": "assets/js/app.16e941c3.js",
    "revision": "e57cd807a074bc4f5139ecc1354c80a0"
  },
  {
    "url": "index.html",
    "revision": "1241cae5ec8b9441f2e502cee557bcd1"
  },
  {
    "url": "pages/course/fanqiang.html",
    "revision": "f95d8ba79118bc0b7e74398853375509"
  },
  {
    "url": "pages/course/verdaccio.html",
    "revision": "f7d84773ea589d220c8ae8fdd0a26649"
  },
  {
    "url": "pages/favorite/development.html",
    "revision": "6a841a47f333c08c54d7ad7c073d3b06"
  },
  {
    "url": "pages/favorite/url.html",
    "revision": "2038c3ee62381b8cf5d264f1e8547af3"
  },
  {
    "url": "pages/notes/flutter.html",
    "revision": "ca46476da10f39251b2f240e4af2e94b"
  },
  {
    "url": "pages/notes/git.html",
    "revision": "18fb28c7614c67511b7c4819d4ef3331"
  },
  {
    "url": "pages/notes/jenkins.html",
    "revision": "fc0c218b45fd410e42132ee22e7a41dd"
  },
  {
    "url": "pages/notes/nodemon.html",
    "revision": "27dc22490f4ebbc29bc434fc73ae0c17"
  },
  {
    "url": "pages/notes/npm.html",
    "revision": "5ca13ef44b18d91da5edf1444cb210dc"
  },
  {
    "url": "pages/notes/typescript.html",
    "revision": "66cc447dabdb179ac07d0faaedc721f2"
  },
  {
    "url": "pages/notes/vsCode.html",
    "revision": "72fa3796149b93042f431819373933c5"
  },
  {
    "url": "pages/notes/webpack/loader.html",
    "revision": "8827aa06500f3473e1da411fb11a2f1e"
  },
  {
    "url": "pages/study/codeSnippet.html",
    "revision": "ccb0030b5bfba66971d873147bc26b41"
  },
  {
    "url": "pages/study/frontEnd/CSS.html",
    "revision": "aefc2750813a90cbf5261f9bd77c0d72"
  },
  {
    "url": "pages/study/frontEnd/javaScript.html",
    "revision": "f977608044dc32f5685ee2b509dd08c9"
  },
  {
    "url": "pages/study/frontEnd/web.html",
    "revision": "feb5e02d18d3a8c114ddf689b74f7dae"
  },
  {
    "url": "pages/study/index.html",
    "revision": "389d3961de04b0397bbfcc5e81fcfaea"
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
