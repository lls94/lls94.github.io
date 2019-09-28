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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "9a015572c61d9898bcbe20f351275d43"
  },
  {
    "url": "assets/css/0.styles.22d3b194.css",
    "revision": "3a4de0805b2a64f6574bf84ace3b3454"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.54ea9ee9.js",
    "revision": "e0056326cbbf6117bdd8593fac42f822"
  },
  {
    "url": "assets/js/11.337a7def.js",
    "revision": "aeb14bd879fdd4d8ce92f10327363437"
  },
  {
    "url": "assets/js/12.2e8a9ff0.js",
    "revision": "a85db02f7c0f6f1a731a1772f491ce04"
  },
  {
    "url": "assets/js/13.8d0ad22b.js",
    "revision": "bbaf71907cda51420289dab48578bfd5"
  },
  {
    "url": "assets/js/14.167e9122.js",
    "revision": "b3506199f7d4fb199f3d09d28971bd5c"
  },
  {
    "url": "assets/js/2.61f210fa.js",
    "revision": "ad155dda91df3785970ff4cd409f7cd0"
  },
  {
    "url": "assets/js/3.af3a48b6.js",
    "revision": "0bee534c664a7cbdcadd7467d2f06b64"
  },
  {
    "url": "assets/js/4.43723d3e.js",
    "revision": "a447d124938e36f8532a8e06bb8fd144"
  },
  {
    "url": "assets/js/5.aad8dc88.js",
    "revision": "d90db2e63d279696b825d2f49c0e59c9"
  },
  {
    "url": "assets/js/6.fd2ab088.js",
    "revision": "686e7418c96be82af38475abef39d0e3"
  },
  {
    "url": "assets/js/7.3125e153.js",
    "revision": "93fc9ac32d04814567124bbf88a82050"
  },
  {
    "url": "assets/js/8.02f1b49d.js",
    "revision": "f72b3a552812cdeb4c0d0204cbf6558a"
  },
  {
    "url": "assets/js/9.1b6c9f10.js",
    "revision": "f784e8dd63fbd7b2f95fba58a683c210"
  },
  {
    "url": "assets/js/app.c4c42eb4.js",
    "revision": "4ad570a2c38449736be8f916124d1140"
  },
  {
    "url": "collectionWeb/entertainment/index.html",
    "revision": "44d46c9b6d858835804f149ed8d72b90"
  },
  {
    "url": "collectionWeb/study/index.html",
    "revision": "8b651e52d72a1bed399a064924163975"
  },
  {
    "url": "fanqiang/index.html",
    "revision": "2ac3fd89e4ad47e55ebe65b4e2f1c603"
  },
  {
    "url": "flutter/index.html",
    "revision": "d75c8f19443f087772a56cdf252f3fba"
  },
  {
    "url": "frontEnd/CSS/index.html",
    "revision": "b10f85f5c2147a3f7c8db3b142fe9071"
  },
  {
    "url": "frontEnd/javaScript/index.html",
    "revision": "9cc661e33a30a205687f7ec83528bc73"
  },
  {
    "url": "index.html",
    "revision": "a1a38045ef77e157648e4d984f359c34"
  },
  {
    "url": "vsCode/index.html",
    "revision": "c25c6bf8697d552961340eefce98f6c3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
