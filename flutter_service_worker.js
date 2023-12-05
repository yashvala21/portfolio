'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "c420e205d8eac4ccea99913b4a50bfa7",
"index.html": "5c87a35b5ed3ad0499e31a8f131352ce",
"/": "5c87a35b5ed3ad0499e31a8f131352ce",
"main.dart.js": "e075df4739a3833b65d60d1e5c01c875",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4d2a074e955647542596586cbde41715",
".git/ORIG_HEAD": "5791a6ca675850d04ef8e1a9c0c60b24",
".git/config": "735e7f66dcd0c51fe36f1eb4aa77c6ae",
".git/objects/59/8d9f720e2ec5558436e17bcec535db457232c0": "137586b2e4f37c00ca1662588662b810",
".git/objects/59/16d4d8ee582425226acb98d7e2206c9519c4a2": "7037cc33fc616a44c6e3b153ed4acf7c",
".git/objects/59/636068b6e3b177cb4c29b216fce56e85f0ca45": "8fc402108cd2895d522d37964d25d479",
".git/objects/66/72ff99f0876d7e8c45b3084bb104de4ac27cbf": "7197ad1c2ce989bc290c17e5ccbd6b7c",
".git/objects/3e/642531f4e9443d544495e293dffd0cbc9e2e47": "15cfe993bc27d7040188d02f0415ca7b",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/68/fbf920fb267d15fe733a6a5ce1c67e3c5241d7": "733887ed0ed2f6beb293af1d6606e244",
".git/objects/9e/387e96bce694da55cebb3acbbdcc9eb9f55af3": "e94d4dbe44addff3e176668c2a8698e6",
".git/objects/9e/ca96a4012b509c7f0634e23160c535b8b36497": "ca90514d3ee23bc4b908aa13d45b6b0d",
".git/objects/3d/1d2a080eab078fc33c7238d334acf8fade15fc": "ddc199872777a419e77a84357fb2f61b",
".git/objects/0e/defd4742f1d31787a1f197c93bb4056663fa66": "8578b86f5989eaf53badfd95f083c488",
".git/objects/34/92bc89ae239a1ea993e8cedfd84bf3dcfcebb1": "85a83b6760186fabcf421a6dcd908819",
".git/objects/05/081aa14959b2c7533d6f80a4a3ec8743205b4e": "d29c3fbdd94690fcf8f9e18c051dbe75",
".git/objects/9c/e5362c7033419ab7c19f81b3a556fb868fcfee": "6628e5312b08aab13fbe41314a85fba8",
".git/objects/02/b43fed2b0c7f984bc6d32734c7313ae4d69fc0": "fc8a532a313ab692ea0ba1c57e2a79ca",
".git/objects/02/fd40c26ebfb7f09930aa66bbfaa5a55f909096": "7f125713fc05d6b667c39ce67e3efef2",
".git/objects/ac/ad292f9aaad99452df4047b853316585a63cb2": "7bd913d69118ab138b12c1300b1e69ef",
".git/objects/b4/13770e49b7984af2aa18498d3332d6f744f2ff": "f0312285350c1c4ebe44f0aef01af3b3",
".git/objects/e2/1d32998a12005f2647055ee3943fc2d0cbc651": "c305e8b830baa0e49a9a5b515cd8bbbc",
".git/objects/fd/0e6e622c9ae8eee7184628f44e682900cea5fd": "4716b961c1fffead2680bb2c201314d0",
".git/objects/f2/40da9f9760e52d6ae3732ae9be0ccccceb8fc2": "9efb5e13b0da7f079f7c988941c3d8d2",
".git/objects/f2/6bb8c918c312a9c3929382d2e9e96b5296be37": "f4ad0d9e19c8d72d1a13150a888b4c79",
".git/objects/e3/b25844e5548bc7453680d5874b9914cc687ecb": "5c7be12faac5efda6f97e9e61d41f6e0",
".git/objects/fe/48ee59b7a1d374f836a19cfc883961a5306448": "38101f5c7d71bfba36dd85aee48ec1af",
".git/objects/fe/28e74c0120edbc102d46ca7bb3350d11100793": "e5e1e7dbe0ca56cd1843780f03737fc4",
".git/objects/c8/653b102935f6369b6d024651d8e65f560d50e4": "37d121746a3d518128bbe962271ac2e2",
".git/objects/c8/ffe71b46cb30f0c094e2429a7ba5de7b97bb93": "409316bfc4f815ce5688f4287cff986e",
".git/objects/ed/6b6d361dc1741dcf689476af8d67bf36bc7830": "972093150216e891345d3de14603d14d",
".git/objects/c6/60ff63824979206c0ed15c4e7fa8c95665b6f1": "18896b707a3f117c0d509fc67091e50f",
".git/objects/18/7ffb6ccbc760b3be9375993234b03e17d86e41": "d9e28a0174891d80ef77435044680485",
".git/objects/pack/pack-a47aa80f78e6812a6efeeab7fe6c13f967500be4.pack": "a6a79f93807ae04597a166b791df0f43",
".git/objects/pack/pack-a47aa80f78e6812a6efeeab7fe6c13f967500be4.idx": "4510b1df97d33e38f0ae4ab5fcbcaf8b",
".git/objects/42/225bfeb972c7f5c48579976ad49ff236f5f7b9": "b95e0bb810105cce543ff345e5d54e14",
".git/objects/42/082ee2260e2bee7508f3115a1034e4634ec531": "75fd780bd6d13403094b6ee854943a8a",
".git/objects/42/e3ce7d48045532d93d1fd34be01887d8d31c23": "498bee004b89762cf0778bbefee8c76f",
".git/objects/73/c5816b3626260a6383dae4365dcdf07134d863": "600cbf52c574421232e4f6e8ee75555e",
".git/objects/72/cb3269706f175286bc54ae2989f312826b08a6": "55edcc8b80fcd442382b1a40f9434df3",
".git/objects/88/7d4f0b83fa6abfb66d4b46ce8e8ca0706978b8": "fd91f1c6ba911c510b785a21480fe2d6",
".git/objects/88/03fb02a92ae89e9c0b22a9cd98aa3d9a2e5986": "6bf8ee5eab875a82a3229c0c98039e12",
".git/objects/9f/fdf76dd4790a73dc27edf3e195d6bd71e08abb": "0bda1a91486935dc44fe16056e81a6aa",
".git/objects/9a/62be43e6d8dde615890b8eaf0f9ac807b72079": "f3e55632d230ba5698bc4e628fbc9b8e",
".git/objects/54/e442edddbaede3cc729c8ae43bf5d248c13b67": "6e30765c7c21e985b203511809408205",
".git/objects/30/15aa6018d5ada1cc1ec85bafed1f1f528dc79c": "704905ea248f29b9ab14785cb2536692",
".git/objects/5e/2557a14a2415c6ae2592b10e4543f6601d72b5": "f34a36f80fb1cbbbbff50dcccf78f92e",
".git/objects/99/92f02653347dc17f5663ec91033e60fe27dd13": "a9bcd8371bde5241b76829d2f65eda89",
".git/objects/99/cbe4efb521b41636f8c3c288a208646a5cbd87": "7da4d617e5d55a04383c00a1a1cde71b",
".git/objects/0a/feacbe476a29cf4a2871a783105bfaee6500fb": "392e7d020899bb87dcd3b96ddb891de2",
".git/objects/90/ad82a2a02b60a225166ab9a49d430f476e6171": "1c422f1905756f9be413ce2f644d22f5",
".git/objects/ba/22e852aca9a4b05e18a141e4dae6caf91af57b": "0b157be72fdaf509e3dbd9f65b19c987",
".git/objects/a0/d1c0ab0be0201a660d29bc0cb818171d805b85": "a98164bc58e473e07de8c4507f437dbc",
".git/objects/a9/bc3d6b6a6ceb916069d7578d93498cdb388f71": "1e3ef0a475b69557208129752c9fe916",
".git/objects/d5/e7d657a645ce5e605a6f13ed06def8b5422d22": "5f3f218bb99f6af0aec38fe00f2884c3",
".git/objects/aa/ba59cf615026be7b5a7538036e2a4b1976cfa0": "bb72b06c707548cd4d6136d5dbc80b84",
".git/objects/aa/de9218930c4010e3d3295e030568237b0617a8": "daa85a1eb93bf827a187fa0ee04dbe6a",
".git/objects/db/07a38c15194bac2e39224e989707ad17780fc0": "a3c171cdfb49d5923946683741ab1ca6",
".git/objects/c3/3da097ec3e9cbf0e302ce6f168bf28556591ea": "2e84464a75493bfd1fa62d1b9441ce04",
".git/objects/f9/bd2d36782b6b4b283636ea842b2ce48d26a9d4": "758fba9c222c6f305c817d956bc977bd",
".git/objects/f0/6f4d08325b0e468153b1bff4421d20cdc5f8dd": "b0282d292661245d333ae1f6bc46142f",
".git/objects/c2/a6ce51664ec761e4d58620e759af5caf0eee82": "094a80e55dddfd06f21264ab3a4b60c4",
".git/objects/2c/1d7aa3dd27a298330d3bb57008d18f0c57a64b": "195caeeb04725301116dd1efefe80c41",
".git/objects/2d/fec51e9be65b7b134b0c437625c07b57a42490": "da9a98b8c7a02fcf5fd672fb545dc0c4",
".git/objects/41/c434ae2232bb6017c6d8e5dffc928cf2bc6743": "7105bee48449f92b00e5aba8508da917",
".git/objects/1b/88556c21128092d98a91d8725347b8e2a15f1c": "fba29a7fab59cd7ecf0b56e623cdda7c",
".git/objects/77/5e1d5fd31f97c713041c6698d029972a7289e7": "eb30809af4dda9f00143928c56de69f1",
".git/objects/1e/77b4e39bc0ab7ec2f96e9406ec256042e584e7": "6e853dc0b5edd9889dcfa230f2a2a65d",
".git/objects/24/b9c5754ca2af5e20418cfa6ccde69b3709f70d": "0eb1abc54fcafbe15d0bbd378a771dcb",
".git/objects/23/9bccdd6fd366f6934284ee55429a69a0c128c7": "b98b8106dc4dc6d2b5c09bb5fd0e0f74",
".git/objects/1c/1f98690cca58cf7cb118cfe66c37a269740e7d": "18e002d1e8f87b7e0f21adb18c2a1918",
".git/objects/82/adc9751e7394406d5035ab847a1330ae3cbf84": "9d36e6ea71186b45834776f10d933689",
".git/objects/49/41a4abdc994d7095ca429366f51f8c8583db1e": "3ca0165681d2e66cdc089c3281136223",
".git/objects/47/a2ba93cb5cdba58ac9c23f4186686406d94a21": "dfa502f035f7edb2d8bf682c82524048",
".git/objects/7f/2710db147d974aa83400da9628242f29bd6801": "22543cf8202ee619a83ab908bb22760f",
".git/objects/22/cc56802235fd61531b515802cd186ee7b9a6c6": "8e496c2ce4762b5edc30afb9237f92cb",
".git/objects/25/09b5311eed0f3d54d567a7c4050bb34b011e6b": "0e6ef07e1c10afc9009613d4d424486a",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1d342467f07a5f3254e4f5838288e4a6",
".git/logs/refs/heads/main": "1d342467f07a5f3254e4f5838288e4a6",
".git/logs/refs/remotes/origin/HEAD": "69e4178fb9dbe5e377a41ce540d347da",
".git/logs/refs/remotes/origin/main": "48cc4c8e8f39ecce71abec1f0cddc814",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "5791a6ca675850d04ef8e1a9c0c60b24",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "5791a6ca675850d04ef8e1a9c0c60b24",
".git/index": "cdaaa592cc0a8c4fd178376080645545",
".git/packed-refs": "21a02815b079d258c23cdf1f82f3fa34",
".git/COMMIT_EDITMSG": "be2bd12c69f4efe6c53349831f639d8e",
".git/FETCH_HEAD": "a37ed4d2581034c29eb5205603aa587f",
"assets/AssetManifest.json": "c3f4a4e75a1ffe60a979d3800b2f79b8",
"assets/NOTICES": "a99adb6f514395a4452c3b9706cd3f96",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "4ef9893efa01cfda3949bb8a030ea494",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "658b490c9da97710b01bd0f8825fce94",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5070443340d1d8cceb516d02c3d6dee7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d7791ef376c159f302b8ad90a748d2ab",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "a06eaa6599b88f6dd6615d8904670515",
"assets/fonts/MaterialIcons-Regular.otf": "a06abdca46ae6c90d9105d41f6f71718",
"assets/assets/images/coffee.png": "0a3380640f0eb6e36b694dafb7fe8e97",
"assets/assets/images/doctor.png": "b7a983fb5bf36114133c169f66bbfef7",
"assets/assets/images/cui.png": "287f9787968f5df14897e9066c22a388",
"assets/assets/images/task.png": "62d6be2ebaef80434b114eacd9102a52",
"assets/assets/images/photo.png": "71e4176851dc493d79a2fa16a1c73d72",
"assets/assets/images/photo.jpg": "2ac07d8c858d590bd7b7a20383c418fb",
"assets/assets/images/alarm.jpg": "7f8f2e55f5f47deaf440b3be64ca15d7",
"assets/assets/images/laptop.jpg": "f4b231e5250391ef379f44ecb1def033",
"assets/assets/images/car.png": "ae3e0dda1da997a4e0ccd5cf1a25d2cd",
"assets/assets/images/laptop2.png": "bf6a19e46f1d09771e91ee224903a7d1",
"assets/assets/images/laptop2.jpg": "b58ad5f295b353964c8276356008546c",
"assets/assets/images/pos_home.png": "0915e898307a409d15ec009521b649a8",
"assets/assets/images/macbook_frame.png": "4b364f052c0a34992e496d6b0e869333",
"assets/assets/images/triange_icon.png": "086ab5ca50d3e558e3307ff009975083",
"assets/assets/images/chat.png": "489b7f6246ce741be85ca0d551e9d07b",
"assets/assets/images/recipe.png": "47c72988f9bb6d301948ac38877b231c",
"assets/assets/images/image.png": "9fb5704e719f93940bba93d69ebbd5cb",
"assets/assets/images/player.png": "612730c3861b2af0a0ae161ac8a72345",
"assets/assets/icons/vscode.svg": "9dd77a384a813c15891e267eb791c77c",
"assets/assets/icons/android.svg": "d33d14f9659ffe3c8aa818f9aee319c7",
"assets/assets/icons/home.svg": "4429324a4e964788eb6a988a3c0a3763",
"assets/assets/icons/firebase.svg": "ca478b88f589bc8715b6d27d311bcfaa",
"assets/assets/icons/github.svg": "c23a95fcb4b1d25765107e4e73b06438",
"assets/assets/icons/sql.svg": "d9bb541c109c77eda30775bf5f7898d5",
"assets/assets/icons/flutter.png": "1105c9a994c1a6638daed558d5b631fd",
"assets/assets/icons/flutter.svg": "6edd5cc328dcb4bdd9849b9e9aeee647",
"assets/assets/icons/instagram.svg": "abfe70361d37471fb39f7967cc33ed16",
"assets/assets/icons/download.svg": "628700a3031424d215a441fab2da1731",
"assets/assets/icons/twitter-154-svgrepo-com.svg": "7cba76736f7e19c9b4d99b520aa58802",
"assets/assets/icons/check.svg": "4220c82511cc1dfb40b8bba7d25c5f55",
"assets/assets/icons/whatsapp-128-svgrepo-com.svg": "b39ff32cdcba88c8cd3131aeafb87778",
"assets/assets/icons/laravel.svg": "160dcd1a7ebee7741a91be4561ae5082",
"assets/assets/icons/bloc.png": "977fbfba561065f9a68c4b47f9774531",
"assets/assets/icons/facebook.svg": "4ccea7d0829b5eb645cb7240d1dcead7",
"assets/assets/icons/css.svg": "588acd77b7208bd05f6acaff9f0d2f9e",
"assets/assets/icons/whatsapp.svg": "c0d7c1e92ed7261869cc5d6da4cf25ec",
"assets/assets/icons/stripe.svg": "3a1fe1fb97a0559d8e8b1d5149af6a3a",
"assets/assets/icons/windows.svg": "4e02cc78e694dbbe891ce531e43d9e43",
"assets/assets/icons/ios.svg": "4839d919fcf3af179ec68ff8ff79b71c",
"assets/assets/icons/linked-in-logo-of-two-letters-svgrepo-com.svg": "7cdcd269c329f838d50ff94b0387fcd8",
"assets/assets/icons/dribble.svg": "d392567c5678d42472d2c7b766268101",
"assets/assets/icons/linkedin.svg": "5b2195ddf9e879047dd8a163c4194920",
"assets/assets/icons/twitter_x.svg": "69b7e34b5ea981ab6ad9f4b7100406a6",
"assets/assets/icons/twitter.svg": "a4a0163fef48a4247a305528c07bc4fa",
"assets/assets/icons/html.svg": "140363bf89baff1016308e972257def8",
"assets/assets/icons/mysql.svg": "8fe3df7bd4554cc5a539bab28e9a6339",
"assets/assets/icons/dart.png": "1ab71d33e7ba834836197b4fa8726da0",
"assets/assets/icons/behance.svg": "35ad2d47e647d0b168e7707b2984c6b5",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
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
