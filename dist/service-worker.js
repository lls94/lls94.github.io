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
    "revision": "851b46d866931eb65e202173f24f79d4"
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
    "url": "assets/js/10.c6ec6aa3.js",
    "revision": "9af631c99fcb5565f1a46d495e83bd66"
  },
  {
    "url": "assets/js/11.d005f210.js",
    "revision": "21a207df0bff9bf8bbde37afa3d60e11"
  },
  {
    "url": "assets/js/12.3b1db43a.js",
    "revision": "800f3b8c0666d04fc12468ffc218e961"
  },
  {
    "url": "assets/js/13.d85ddb4d.js",
    "revision": "67fbb9fbd9fed101af5e9661c015a12e"
  },
  {
    "url": "assets/js/14.2ed81468.js",
    "revision": "056748d7f8be25ebdc6756d370b19133"
  },
  {
    "url": "assets/js/15.6f8c361d.js",
    "revision": "64e5d8e5f869794b5c5e0787158ef323"
  },
  {
    "url": "assets/js/16.91e96c65.js",
    "revision": "9d05966bbc254df2276cb0f7f82c8aa8"
  },
  {
    "url": "assets/js/17.1e2bf09a.js",
    "revision": "f4520638e175659197c3688afcfbec16"
  },
  {
    "url": "assets/js/18.9b31df41.js",
    "revision": "a8b0137059cc604757fb194c5cc08638"
  },
  {
    "url": "assets/js/19.f47145ab.js",
    "revision": "7ddb5af9b0d5035afefdf275f58c7901"
  },
  {
    "url": "assets/js/2.0412bca3.js",
    "revision": "a51d16eedab4b5f24a812a731f536994"
  },
  {
    "url": "assets/js/20.2ffcc49c.js",
    "revision": "8bbc023ec9ea32ad377f8581136525bb"
  },
  {
    "url": "assets/js/21.4eedfc46.js",
    "revision": "06c2e870060b0d52303d758f450c3653"
  },
  {
    "url": "assets/js/3.59eb076c.js",
    "revision": "c68d80ef88ce3c172bc8e689fbccc1e8"
  },
  {
    "url": "assets/js/4.9e4a030f.js",
    "revision": "9f439019263242ee136bb0fc8f74e3d9"
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
    "url": "assets/js/8.06ed4db6.js",
    "revision": "d459644a9f7c8bd7f648caf490e2dc24"
  },
  {
    "url": "assets/js/9.370f1871.js",
    "revision": "645435be4a45d71b36ff66b19f4362cb"
  },
  {
    "url": "assets/js/app.f840fe7d.js",
    "revision": "d3a74d900534da6e36fcef46c84c04c9"
  },
  {
    "url": "index.html",
    "revision": "4cec6f14547e24a18ee9daf4910ba9b1"
  },
  {
    "url": "pages/course/fanqiang.html",
    "revision": "dd1f10528d3d9173e5fe9112c75ba8b0"
  },
  {
    "url": "pages/course/verdaccio.html",
    "revision": "e4fd07dcc4184ae5a8f3f58d72588272"
  },
  {
    "url": "pages/favorite/url.html",
    "revision": "3de006cba5e973d93b0c53c94d840d65"
  },
  {
    "url": "pages/notes/flutter.html",
    "revision": "ab62f2c24e6c68098363d3fd63234589"
  },
  {
    "url": "pages/notes/git.html",
    "revision": "789b3fafc7f6c41305346e3fa025ad1a"
  },
  {
    "url": "pages/notes/jenkins.html",
    "revision": "79a056ca68683add746956a17a1b5618"
  },
  {
    "url": "pages/notes/npm.html",
    "revision": "3c45fe6f4ef63af9b37222ef80800948"
  },
  {
    "url": "pages/notes/typescript.html",
    "revision": "7fddb33b4fd34d816a2c0344d24238d7"
  },
  {
    "url": "pages/notes/vsCode.html",
    "revision": "cea0ea5c9413be4981c0e6a000b4ceb3"
  },
  {
    "url": "pages/study/codeSnippet.html",
    "revision": "5eaebac488419eb029ea6a5ebecdfb9c"
  },
  {
    "url": "pages/study/frontEnd/CSS.html",
    "revision": "6e202f0e174e4d431c376e49923248e1"
  },
  {
    "url": "pages/study/frontEnd/javaScript.html",
    "revision": "8c48b4c45dbccc14b8fd705413425010"
  },
  {
    "url": "pages/study/frontEnd/web.html",
    "revision": "4feb9a53f949d3a70ad19727cf1247e9"
  },
  {
    "url": "pages/study/index.html",
    "revision": "9b949bd98f3f2cdf4eec0870e73617c7"
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
