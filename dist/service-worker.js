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
    "revision": "c45cf4abb42338688671248613d59566"
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
    "url": "assets/js/10.3ea8d8cf.js",
    "revision": "c96a9512b644c625b16fee1520414d1b"
  },
  {
    "url": "assets/js/11.d41675eb.js",
    "revision": "44136f93c04cde8afff8e0abbc2f13df"
  },
  {
    "url": "assets/js/12.44b62daf.js",
    "revision": "7c046459eec6af238b5678708b916df0"
  },
  {
    "url": "assets/js/13.93aff6d8.js",
    "revision": "fbf543754db23322ef4953a04d420b16"
  },
  {
    "url": "assets/js/14.43cdaf37.js",
    "revision": "8dab291f3f463f64da94904f003fb060"
  },
  {
    "url": "assets/js/15.76f29413.js",
    "revision": "922ff3075986e3865ea94bf37817afa4"
  },
  {
    "url": "assets/js/16.d8218869.js",
    "revision": "44478fd14e2d159908012b043b743aee"
  },
  {
    "url": "assets/js/17.7fb15138.js",
    "revision": "89cb207ba507b91588fbece06b9ee8ca"
  },
  {
    "url": "assets/js/18.1e8b6a26.js",
    "revision": "d455f74ebe3603197477b74a4f9da2d7"
  },
  {
    "url": "assets/js/19.9192b978.js",
    "revision": "e914d6057a2ef35e2e6cbf14a898255a"
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
    "url": "assets/js/21.4ac7a844.js",
    "revision": "b468a5edb65c659f49f22ea2de951f41"
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
    "url": "assets/js/7.7920d9d1.js",
    "revision": "32dadc8c9945ca2fd64cfc3173da1969"
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
    "url": "assets/js/app.03cd9736.js",
    "revision": "cc6966f18639537f0800b54419a8e853"
  },
  {
    "url": "index.html",
    "revision": "0cfdbfa5d8472a4e2e52214d76031af6"
  },
  {
    "url": "pages/course/fanqiang.html",
    "revision": "249643ddc8d5ac7df3f7872e808d8a36"
  },
  {
    "url": "pages/course/verdaccio.html",
    "revision": "ec8281364ff774602db51bca3884e898"
  },
  {
    "url": "pages/favorite/development.html",
    "revision": "7386f22e780bd801994dd1e0c29aad5b"
  },
  {
    "url": "pages/favorite/url.html",
    "revision": "f4fc602618e73e889375df32acc8764a"
  },
  {
    "url": "pages/notes/flutter.html",
    "revision": "e34469acb51dceb5e2857547f2898838"
  },
  {
    "url": "pages/notes/git.html",
    "revision": "02bb4c5365d28c801550089ad5b35f32"
  },
  {
    "url": "pages/notes/jenkins.html",
    "revision": "31506a2419a63da1c27c4d9a311c06c5"
  },
  {
    "url": "pages/notes/nodemon.html",
    "revision": "840fce639a064299986946ea3105a5c1"
  },
  {
    "url": "pages/notes/npm.html",
    "revision": "e4c0e5cc75ba3dca2148cff00dbd8f12"
  },
  {
    "url": "pages/notes/typescript.html",
    "revision": "21ee15ae1fa1becbe2e24a7a9b7e15bc"
  },
  {
    "url": "pages/notes/vsCode.html",
    "revision": "68f6eba3b7249dacbd0a0e8459892bc9"
  },
  {
    "url": "pages/notes/webpack/loader.html",
    "revision": "8ae595c2e70d12d4fbf76313f607621a"
  },
  {
    "url": "pages/study/codeSnippet.html",
    "revision": "f94f205bbc9c4aaff95ac0465622083e"
  },
  {
    "url": "pages/study/frontEnd/CSS.html",
    "revision": "180e7a32f15820895b59b5d619bd576f"
  },
  {
    "url": "pages/study/frontEnd/javaScript.html",
    "revision": "19c0938ca599b691586c2b8c346e5430"
  },
  {
    "url": "pages/study/frontEnd/web.html",
    "revision": "7db7717daeb85ddc54ca608916a78e02"
  },
  {
    "url": "pages/study/index.html",
    "revision": "e82ceb5705035d7e0e1e9d1702e262da"
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
