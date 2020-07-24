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
    "revision": "bfb91f0113e49df41af6684ab697912d"
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
    "url": "assets/js/10.b6241b4e.js",
    "revision": "dd7e112025e227eb74dcb0d35f117a4b"
  },
  {
    "url": "assets/js/11.12c69c3d.js",
    "revision": "7708dd7a6ec3ade1906752b68a867063"
  },
  {
    "url": "assets/js/12.de489702.js",
    "revision": "b94c4198bb65bc7c36238c79562d6987"
  },
  {
    "url": "assets/js/13.93508082.js",
    "revision": "c7d5886cc547a5feafe870c1146931ab"
  },
  {
    "url": "assets/js/14.04692c52.js",
    "revision": "b36c5054de6fe0a64714e8b53911f419"
  },
  {
    "url": "assets/js/15.96eee33d.js",
    "revision": "6e41ebdd4f59ad6937af762dfcc3c5af"
  },
  {
    "url": "assets/js/16.4d0fc4b1.js",
    "revision": "b69b743f9094e6cec0a95486e229bc19"
  },
  {
    "url": "assets/js/17.12f902ba.js",
    "revision": "98cca383ca13566cb240093197c8c62a"
  },
  {
    "url": "assets/js/18.73cde3ce.js",
    "revision": "eb6534fa34cc3d05c7630a54344ac67e"
  },
  {
    "url": "assets/js/19.f26f74b4.js",
    "revision": "ec9d2865bbc9deeee0b1cb653695c4e2"
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
    "url": "assets/js/4.3bdbe596.js",
    "revision": "3bc74b97041e48b3767d61d204e135d9"
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
    "url": "assets/js/8.d7188da1.js",
    "revision": "fc3b27018679169156399e53e2c1952a"
  },
  {
    "url": "assets/js/9.370f1871.js",
    "revision": "645435be4a45d71b36ff66b19f4362cb"
  },
  {
    "url": "assets/js/app.51afb1de.js",
    "revision": "1beebb01bb18ad912ca574307788ceb6"
  },
  {
    "url": "index.html",
    "revision": "1b6e3050c1e306ef2ab004a91bde04cc"
  },
  {
    "url": "pages/course/fanqiang.html",
    "revision": "f1b4eef8b3f2887a6313f276c1cac8c5"
  },
  {
    "url": "pages/course/verdaccio.html",
    "revision": "2287c63a8e739ab3cb1f3db482ed4dfe"
  },
  {
    "url": "pages/favorite/url.html",
    "revision": "c192ef5231eaa8f4c2da190befe19719"
  },
  {
    "url": "pages/notes/flutter.html",
    "revision": "48b421a6d6f6a5c3c3452c2b2ce00db5"
  },
  {
    "url": "pages/notes/npm.html",
    "revision": "f8b3ae146a1b3e2902dad7a152c2871e"
  },
  {
    "url": "pages/notes/typescript.html",
    "revision": "07fc17bb1d75b61bf73cfa6a16ec07ab"
  },
  {
    "url": "pages/notes/vsCode.html",
    "revision": "ddf2c3fb660101e66e0628bc9b73e6bb"
  },
  {
    "url": "pages/study/codeSnippet.html",
    "revision": "f21cb5db11574a27927d786d1345879a"
  },
  {
    "url": "pages/study/frontEnd/CSS.html",
    "revision": "3f27796379b32af0f1cc4219e28338ca"
  },
  {
    "url": "pages/study/frontEnd/javaScript.html",
    "revision": "d97e483ddb10b8d596de9a1c507fea17"
  },
  {
    "url": "pages/study/frontEnd/web.html",
    "revision": "063da637b385fc12c023d70b19669839"
  },
  {
    "url": "pages/study/index.html",
    "revision": "428185a4b37117939997f829bf93375e"
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
