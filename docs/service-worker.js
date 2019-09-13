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
    "revision": "684e57785142556fdddb382594e38cb7"
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
    "url": "assets/js/10.0ddf402d.js",
    "revision": "1ea5e0ee0d8175beeb2b8b83db723017"
  },
  {
    "url": "assets/js/2.61f210fa.js",
    "revision": "ad155dda91df3785970ff4cd409f7cd0"
  },
  {
    "url": "assets/js/3.7eae84d8.js",
    "revision": "be2e5391a500b060e201bf979e627e9f"
  },
  {
    "url": "assets/js/4.c02c8c8b.js",
    "revision": "c62aea9019697b97aede8fb3e79bb4af"
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
    "url": "assets/js/7.1fce15c3.js",
    "revision": "1fd5148600abea8ec81150647f869d94"
  },
  {
    "url": "assets/js/8.808798d3.js",
    "revision": "c65f67d5d9688c6248738f7415036262"
  },
  {
    "url": "assets/js/9.bd4e0ffe.js",
    "revision": "caf7bc75afc7261e80ddb4b61a7ff75b"
  },
  {
    "url": "assets/js/app.9b7cea45.js",
    "revision": "3a6947d103acec670e6d526236246534"
  },
  {
    "url": "collectionWeb/entertainment/index.html",
    "revision": "e86ecd006c5b727d60cc11a3c5e262a8"
  },
  {
    "url": "collectionWeb/study/index.html",
    "revision": "82494ef4e17c40559061d6b9f5dd50e8"
  },
  {
    "url": "index.html",
    "revision": "8e2aa63303f36c59a9b1d89d8aebd466"
  },
  {
    "url": "logo.jpg",
    "revision": "c7711ca6aad675412a521fd529b6e019"
  },
  {
    "url": "vsCode/index.html",
    "revision": "e50605b204f621066b1afe523da68597"
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
