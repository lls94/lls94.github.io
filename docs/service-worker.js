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
    "revision": "8b53015744facc36e4e1a48fe5ce9e86"
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
    "url": "assets/js/app.39587bb8.js",
    "revision": "195287fecde9d4941bfdb7c49c42a4e0"
  },
  {
    "url": "collectionWeb/entertainment/index.html",
    "revision": "580cc9f867b88a66d9be0eb60572566f"
  },
  {
    "url": "collectionWeb/study/index.html",
    "revision": "b7ac4c1c4f229aebd5703d2e30638db9"
  },
  {
    "url": "index.html",
    "revision": "b1554b8bf6a780094d359e7e247b5f9e"
  },
  {
    "url": "logo.png",
    "revision": "ac89961090b7d50124ae4acfef492709"
  },
  {
    "url": "vsCode/index.html",
    "revision": "0a1432e8c43bd18786bb9b7a647af1f8"
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
