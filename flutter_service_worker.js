'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "319b62aa4d7b92ddd4e86a4e58aea4a2",
"assets/AssetManifest.bin.json": "0050e6f41a1c83eddcd3f13b3394415b",
"assets/AssetManifest.json": "ed830b5e5fbceefbc97de2514719f3e7",
"assets/FontManifest.json": "8cc340c9cbbbcee78366c3240cca2113",
"assets/fonts/MaterialIcons-Regular.otf": "304043a0469b97083edbfb776e9e7866",
"assets/NOTICES": "3f72d3b91a718b9f2b20b02e52576d76",
"assets/packages/app_ui/assets/fonts/Montserrat-Medium.ttf": "735cdc3ba75463c090ce8e8a2662ecbd",
"assets/packages/app_ui/assets/fonts/NotoSansDisplay-Regular.ttf": "5182edb2a96aa973ef78b098afcd8780",
"assets/packages/app_ui/assets/fonts/NotoSansDisplay-SemiBold.ttf": "c74ff896adfed513fa90d2b90fbea812",
"assets/packages/app_ui/assets/fonts/NotoSerif-Bold.ttf": "42545055b878a78414480eedb9f001af",
"assets/packages/app_ui/assets/fonts/NotoSerif-Medium.ttf": "2977da1df6b14f51486a28f5cb0383cf",
"assets/packages/app_ui/assets/fonts/NotoSerif-Regular.ttf": "381f44aa9fc55e527456f9336582af5d",
"assets/packages/app_ui/assets/fonts/NotoSerif-SemiBold.ttf": "91d067e48b486ec325bd6bb0a30bfba6",
"assets/packages/app_ui/assets/icons/about_icon.svg": "d4dcba37b91885cc46f8727f0c0699ae",
"assets/packages/app_ui/assets/icons/apple.svg": "0a397d0f836ad166ab8f3d7dfc2bfee4",
"assets/packages/app_ui/assets/icons/back_icon.svg": "974e89fcbb633ca19fe8de973052bb98",
"assets/packages/app_ui/assets/icons/best_value.svg": "79db898dd4410fac22c8bd150e178bcd",
"assets/packages/app_ui/assets/icons/close_circle.svg": "dafb527c9b4d4d00e1c77ef9590c38a5",
"assets/packages/app_ui/assets/icons/close_circle_filled.svg": "96bf789cff62f9433da5fbc3b3dcff77",
"assets/packages/app_ui/assets/icons/email_outline.svg": "1c203f8f630b08469077206b57ce7424",
"assets/packages/app_ui/assets/icons/envelope_open.svg": "f9898d2d4b02803de37a92e71747d4b5",
"assets/packages/app_ui/assets/icons/facebook.svg": "9db793f648caa962426622a6e5a0d5be",
"assets/packages/app_ui/assets/icons/google.svg": "116d1acfe4465caf23f6daaff31f2d51",
"assets/packages/app_ui/assets/icons/log_in_icon.svg": "b7301f3f42f265b1e9e50b14548e698d",
"assets/packages/app_ui/assets/icons/log_out_icon.svg": "4de41815197b84a4affa9281c432392c",
"assets/packages/app_ui/assets/icons/notifications_icon.svg": "dfbb6b982f6d95087c7316f6af4e7841",
"assets/packages/app_ui/assets/icons/profile_icon.svg": "65255d77b8d1296c967ce43550b3ac87",
"assets/packages/app_ui/assets/icons/terms_of_use_icon.svg": "2be00a1148d477985564ff1531f005b9",
"assets/packages/app_ui/assets/icons/twitter.svg": "5ea8f365b86248641abc556fb36fbb44",
"assets/packages/app_ui/assets/icons/video.svg": "10ca0099311bbf03734d8517f9355849",
"assets/packages/app_ui/assets/images/continue_with_apple.svg": "bf6e5ed53350d3a112b13f0e436ee9fa",
"assets/packages/app_ui/assets/images/continue_with_facebook.svg": "ed02b90b5ff36ea2740ea26b0d8d13ea",
"assets/packages/app_ui/assets/images/continue_with_google.svg": "0bce9645b3a5fd6652a63768d7a834fc",
"assets/packages/app_ui/assets/images/continue_with_twitter.svg": "8403df35a4360d803d1654b2ae70e661",
"assets/packages/app_ui/assets/images/logo_dark.png": "fbd7ef32db13b62c08f7443f6c26db74",
"assets/packages/app_ui/assets/images/logo_light.png": "74b5595ba27b700fd2e291969c9f825e",
"assets/packages/news_blocks_ui/assets/icons/arrow_left_disable.svg": "ec47c832552963c13f89bb07ffd08d19",
"assets/packages/news_blocks_ui/assets/icons/arrow_left_enable.svg": "ec47c832552963c13f89bb07ffd08d19",
"assets/packages/news_blocks_ui/assets/icons/arrow_right_disable.svg": "407c385447d8e413dcc7a1cfd6698778",
"assets/packages/news_blocks_ui/assets/icons/arrow_right_enable.svg": "407c385447d8e413dcc7a1cfd6698778",
"assets/packages/news_blocks_ui/assets/icons/play_icon.svg": "3ba0696a869aba6f41af5c8bc40b5a22",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1e24496a47f4417af536d6cef6771de5",
"/": "1e24496a47f4417af536d6cef6771de5",
"main.dart.js": "11f965be37afb3d259868f71259f480f",
"manifest.json": "86f1f55ea1ce36523fa52181a1b52093",
"version.json": "d122f02e1258e39f2ca10bddb2b0eb2e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
