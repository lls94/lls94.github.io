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
    "revision": "73657d09d54456c139f616ae008235dc"
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
    "url": "assets/js/10.3fa9be79.js",
    "revision": "6bb196a200aecd7ea2f5938160f39499"
  },
  {
    "url": "assets/js/11.2abbb205.js",
    "revision": "5840c6fa73b171bc257a26eafd202989"
  },
  {
    "url": "assets/js/12.3b1db43a.js",
    "revision": "800f3b8c0666d04fc12468ffc218e961"
  },
  {
    "url": "assets/js/13.baa60f7e.js",
    "revision": "b8642ca95d9aabdcfd0212b5ac22bab3"
  },
  {
    "url": "assets/js/14.b7bc8d49.js",
    "revision": "5eb6b8f0c4b2d81789d48ea273c88fbc"
  },
  {
    "url": "assets/js/15.af5f04c7.js",
    "revision": "9207e04192fa032400bfda950caf40b2"
  },
  {
    "url": "assets/js/16.680da3e4.js",
    "revision": "2ed5ef75b168ada31cb65fe23e18671e"
  },
  {
    "url": "assets/js/17.05aa2d5b.js",
    "revision": "a8433cc09adde8898f37d4e64b900ece"
  },
  {
    "url": "assets/js/18.f819224a.js",
    "revision": "f8cbe9ac43462530292653c3826a7eca"
  },
  {
    "url": "assets/js/19.9a61de58.js",
    "revision": "73e1322a66f5fe38404d6240b7366825"
  },
  {
    "url": "assets/js/2.0412bca3.js",
    "revision": "a51d16eedab4b5f24a812a731f536994"
  },
  {
    "url": "assets/js/20.785245da.js",
    "revision": "e34348f5e344c0142cee554c76956d21"
  },
  {
    "url": "assets/js/21.dbd8d715.js",
    "revision": "df90990b550f358c0e82c51e8ed78b25"
  },
  {
    "url": "assets/js/22.3836da46.js",
    "revision": "c87df6467631ba59c36ad460ee392860"
  },
  {
    "url": "assets/js/23.e0dd1dd5.js",
    "revision": "018992741fd37f0d67ab143d873da5b4"
  },
  {
    "url": "assets/js/3.59eb076c.js",
    "revision": "c68d80ef88ce3c172bc8e689fbccc1e8"
  },
  {
    "url": "assets/js/4.9bb5078d.js",
    "revision": "aeeee32b3d91dd268b397da66dc8f5d1"
  },
  {
    "url": "assets/js/5.a60eb420.js",
    "revision": "85103b3f3543a0ac276dc586cebe56f4"
  },
  {
    "url": "assets/js/6.fce5377e.js",
    "revision": "3192d423610cd846c208f7cfc7eaa91d"
  },
  {
    "url": "assets/js/7.10581cf5.js",
    "revision": "3e181ab3b3bf16521ba72177daa91bed"
  },
  {
    "url": "assets/js/8.d3c276ff.js",
    "revision": "11074f4553ad94d73f16c910809ab00e"
  },
  {
    "url": "assets/js/9.81483a7c.js",
    "revision": "78cff68b4975a1ee192e21dbf7fc642f"
  },
  {
    "url": "assets/js/app.d22c8407.js",
    "revision": "0aca9873e2cef2d48cbd22d76160bb5b"
  },
  {
    "url": "index.html",
    "revision": "1bee04492b8bfed2f7e20920dd58408e"
  },
  {
    "url": "pages/course/fanqiang.html",
    "revision": "dee043eb756c3dd24b4427d7320fa3c8"
  },
  {
    "url": "pages/course/verdaccio.html",
    "revision": "be29c3e0a13f452676584c557a37b50f"
  },
  {
    "url": "pages/favorite/url.html",
    "revision": "04e5fa6d0e2062814eaef1e70f352251"
  },
  {
    "url": "pages/notes/flutter.html",
    "revision": "945fd3efd248cc6a2634f3643a28ccac"
  },
  {
    "url": "pages/notes/git.html",
    "revision": "eb47cf5f2e7992a700acda80bfc2535f"
  },
  {
    "url": "pages/notes/jenkins.html",
    "revision": "0dcbf9f62be86ba154fef4c3a2776bf0"
  },
  {
    "url": "pages/notes/nodemon.html",
    "revision": "185f5a180813a3a0410512ab64c3bdfb"
  },
  {
    "url": "pages/notes/npm.html",
    "revision": "e9b01dcf1c7306802339cbdc9c6cf076"
  },
  {
    "url": "pages/notes/typescript.html",
    "revision": "d833de296d51ecf4365ebdd7d77c313c"
  },
  {
    "url": "pages/notes/vsCode.html",
    "revision": "582a20c78a2fbc9adb6f6a54cd542840"
  },
  {
    "url": "pages/notes/webpack/loader.html",
    "revision": "f7de88c6b4ff80e28e475b56823093a0"
  },
  {
    "url": "pages/study/codeSnippet.html",
    "revision": "b11aa337e57af67b8810cd85cf3339a0"
  },
  {
    "url": "pages/study/frontEnd/CSS.html",
    "revision": "5829982384524bb9ff610d7bc2614066"
  },
  {
    "url": "pages/study/frontEnd/javaScript.html",
    "revision": "220609054e84302f4599bb64b9dfc0c2"
  },
  {
    "url": "pages/study/frontEnd/web.html",
    "revision": "8a68a5ef4c170d80e50adab8f595e1f3"
  },
  {
    "url": "pages/study/index.html",
    "revision": "bd948d93d3de1029ee0ec4308356a37b"
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
