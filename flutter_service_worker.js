'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "c420e205d8eac4ccea99913b4a50bfa7",
"index.html": "76bb80d73df0d9780ef71af89b1cd046",
"/": "76bb80d73df0d9780ef71af89b1cd046",
"main.dart.js": "e3de6ac22f0cfa2cb24af0792b66473b",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4d2a074e955647542596586cbde41715",
".git/ORIG_HEAD": "3bfdf3c4b96b755ae1b54cb302e23079",
".git/config": "735e7f66dcd0c51fe36f1eb4aa77c6ae",
".git/objects/59/8d9f720e2ec5558436e17bcec535db457232c0": "137586b2e4f37c00ca1662588662b810",
".git/objects/59/16d4d8ee582425226acb98d7e2206c9519c4a2": "7037cc33fc616a44c6e3b153ed4acf7c",
".git/objects/59/636068b6e3b177cb4c29b216fce56e85f0ca45": "8fc402108cd2895d522d37964d25d479",
".git/objects/92/4d0bc5ce5027f39c87bd534aa606050abbbab4": "b1b8588148c9c19f760e2790a08210ca",
".git/objects/66/72ff99f0876d7e8c45b3084bb104de4ac27cbf": "7197ad1c2ce989bc290c17e5ccbd6b7c",
".git/objects/3e/642531f4e9443d544495e293dffd0cbc9e2e47": "15cfe993bc27d7040188d02f0415ca7b",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/68/fbf920fb267d15fe733a6a5ce1c67e3c5241d7": "733887ed0ed2f6beb293af1d6606e244",
".git/objects/9b/b757d1d1196fdd62bc2b61dfdb5a5ee5dfd572": "c8ba29e4b2358b1cc6538121d44fb2ed",
".git/objects/9e/387e96bce694da55cebb3acbbdcc9eb9f55af3": "e94d4dbe44addff3e176668c2a8698e6",
".git/objects/9e/ca96a4012b509c7f0634e23160c535b8b36497": "ca90514d3ee23bc4b908aa13d45b6b0d",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/3d/1d2a080eab078fc33c7238d334acf8fade15fc": "ddc199872777a419e77a84357fb2f61b",
".git/objects/0e/defd4742f1d31787a1f197c93bb4056663fa66": "8578b86f5989eaf53badfd95f083c488",
".git/objects/34/92bc89ae239a1ea993e8cedfd84bf3dcfcebb1": "85a83b6760186fabcf421a6dcd908819",
".git/objects/05/081aa14959b2c7533d6f80a4a3ec8743205b4e": "d29c3fbdd94690fcf8f9e18c051dbe75",
".git/objects/9d/17c72b4e202d47487c37b064cd854d60d2977e": "aa31f7d55b22f0c899e274cf2c4633c7",
".git/objects/9c/e5362c7033419ab7c19f81b3a556fb868fcfee": "6628e5312b08aab13fbe41314a85fba8",
".git/objects/02/b43fed2b0c7f984bc6d32734c7313ae4d69fc0": "fc8a532a313ab692ea0ba1c57e2a79ca",
".git/objects/02/fd40c26ebfb7f09930aa66bbfaa5a55f909096": "7f125713fc05d6b667c39ce67e3efef2",
".git/objects/ac/ad292f9aaad99452df4047b853316585a63cb2": "7bd913d69118ab138b12c1300b1e69ef",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/d0/75e4afe36d7afc8e568f042ed51bc050388eb0": "c4e4f666d9b9ab9ab4d91ce483d0d109",
".git/objects/b4/13770e49b7984af2aa18498d3332d6f744f2ff": "f0312285350c1c4ebe44f0aef01af3b3",
".git/objects/e2/1d32998a12005f2647055ee3943fc2d0cbc651": "c305e8b830baa0e49a9a5b515cd8bbbc",
".git/objects/f4/65a8daf4c0cfc6f68d29f6d780f67f0201b3ae": "d3533fd6179befd4364ebb7f18e1b886",
".git/objects/c0/1a9408d86fe0344279f89bd42e1bc21e03aa66": "355eded2ff48b6fc290819e07e2c4d4b",
".git/objects/fd/0e6e622c9ae8eee7184628f44e682900cea5fd": "4716b961c1fffead2680bb2c201314d0",
".git/objects/f2/40da9f9760e52d6ae3732ae9be0ccccceb8fc2": "9efb5e13b0da7f079f7c988941c3d8d2",
".git/objects/f2/6bb8c918c312a9c3929382d2e9e96b5296be37": "f4ad0d9e19c8d72d1a13150a888b4c79",
".git/objects/e3/b25844e5548bc7453680d5874b9914cc687ecb": "5c7be12faac5efda6f97e9e61d41f6e0",
".git/objects/fe/48ee59b7a1d374f836a19cfc883961a5306448": "38101f5c7d71bfba36dd85aee48ec1af",
".git/objects/fe/28e74c0120edbc102d46ca7bb3350d11100793": "e5e1e7dbe0ca56cd1843780f03737fc4",
".git/objects/c8/653b102935f6369b6d024651d8e65f560d50e4": "37d121746a3d518128bbe962271ac2e2",
".git/objects/c8/ffe71b46cb30f0c094e2429a7ba5de7b97bb93": "409316bfc4f815ce5688f4287cff986e",
".git/objects/c8/02d23da5c42de0ee4984c5268066302d34bc49": "ef3f04e82ae5136f2d1e8b52759a5a29",
".git/objects/ed/6b6d361dc1741dcf689476af8d67bf36bc7830": "972093150216e891345d3de14603d14d",
".git/objects/c6/60ff63824979206c0ed15c4e7fa8c95665b6f1": "18896b707a3f117c0d509fc67091e50f",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/7ffb6ccbc760b3be9375993234b03e17d86e41": "d9e28a0174891d80ef77435044680485",
".git/objects/pack/pack-a47aa80f78e6812a6efeeab7fe6c13f967500be4.pack": "a6a79f93807ae04597a166b791df0f43",
".git/objects/pack/pack-a47aa80f78e6812a6efeeab7fe6c13f967500be4.idx": "4510b1df97d33e38f0ae4ab5fcbcaf8b",
".git/objects/7c/1766b4c7b0267072203efbe1a93fcb6311dec6": "43cbc67f0d3b3988a37f07a0eadd7d22",
".git/objects/42/225bfeb972c7f5c48579976ad49ff236f5f7b9": "b95e0bb810105cce543ff345e5d54e14",
".git/objects/42/082ee2260e2bee7508f3115a1034e4634ec531": "75fd780bd6d13403094b6ee854943a8a",
".git/objects/42/e3ce7d48045532d93d1fd34be01887d8d31c23": "498bee004b89762cf0778bbefee8c76f",
".git/objects/73/c5816b3626260a6383dae4365dcdf07134d863": "600cbf52c574421232e4f6e8ee75555e",
".git/objects/87/1c4b5657189b1c8a5f1e72bad33dcbba1b086f": "b279227d7f4908ed13f8f592937dcbfc",
".git/objects/7b/d1909c1ad91222082e9c7e21c6b5da646caf5c": "846b0fcac21ebd9d45f535ee5c207386",
".git/objects/10/0c30913e71952b72ff718879a988aced508c41": "39c74f90a68612ce4e93fb46d038e681",
".git/objects/19/9f2e8efd6a9fd544003d6e988ad21af707510d": "f03cd868078d47e4bbccb01f38480b22",
".git/objects/72/cb3269706f175286bc54ae2989f312826b08a6": "55edcc8b80fcd442382b1a40f9434df3",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/88/7d4f0b83fa6abfb66d4b46ce8e8ca0706978b8": "fd91f1c6ba911c510b785a21480fe2d6",
".git/objects/88/03fb02a92ae89e9c0b22a9cd98aa3d9a2e5986": "6bf8ee5eab875a82a3229c0c98039e12",
".git/objects/9f/fdf76dd4790a73dc27edf3e195d6bd71e08abb": "0bda1a91486935dc44fe16056e81a6aa",
".git/objects/07/9a08addc88d0e108eb25861ef68ca634ebe289": "e0845e6f3e24ce86a625d258feec9c0c",
".git/objects/00/c39fb94b1a1cab8e11a7cdbe108cbc7cd4f034": "01d8eb7df8e5e151c390d6a62619b006",
".git/objects/9a/62be43e6d8dde615890b8eaf0f9ac807b72079": "f3e55632d230ba5698bc4e628fbc9b8e",
".git/objects/9a/9f0caa7a1f1d73f1a5a8dcbd6205c3daf00c9d": "2d5db6f717197c105b88380a9ff44249",
".git/objects/09/f85aec8e9f48c833046a49fa6e583814ff257c": "889fe0b085e257036b2de1dbf7e8d9b6",
".git/objects/3a/a7ffb3e5bd5578b660c03f4341ffc954c2e113": "ebd5d9ccf3f4fd55ada58ed077514338",
".git/objects/3a/7e3d59f8c7e4d492588666eabd7afbd89c6dc4": "3e06dac4fedeeefddd15bb2e057e3bba",
".git/objects/54/e442edddbaede3cc729c8ae43bf5d248c13b67": "6e30765c7c21e985b203511809408205",
".git/objects/30/15aa6018d5ada1cc1ec85bafed1f1f528dc79c": "704905ea248f29b9ab14785cb2536692",
".git/objects/5e/2557a14a2415c6ae2592b10e4543f6601d72b5": "f34a36f80fb1cbbbbff50dcccf78f92e",
".git/objects/5b/7903f035ccc2d2e5cfd0c58cb0415793408612": "42a7bd1fbe699d26ef53909588a0045f",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/99/92f02653347dc17f5663ec91033e60fe27dd13": "a9bcd8371bde5241b76829d2f65eda89",
".git/objects/99/cbe4efb521b41636f8c3c288a208646a5cbd87": "7da4d617e5d55a04383c00a1a1cde71b",
".git/objects/0a/feacbe476a29cf4a2871a783105bfaee6500fb": "392e7d020899bb87dcd3b96ddb891de2",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/0a/4da16ef7151f90977b17f08463b5d717f6340a": "e2bba7f9519bcc077cce4ae2ed1fa1a0",
".git/objects/90/ad82a2a02b60a225166ab9a49d430f476e6171": "1c422f1905756f9be413ce2f644d22f5",
".git/objects/d4/1d92bda8d21f08e7037c7bcfdaf3a09b065600": "dfc5662177609f320cc834e95a7024a8",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/ba/22e852aca9a4b05e18a141e4dae6caf91af57b": "0b157be72fdaf509e3dbd9f65b19c987",
".git/objects/a0/d1c0ab0be0201a660d29bc0cb818171d805b85": "a98164bc58e473e07de8c4507f437dbc",
".git/objects/dc/43453855158e46e06ff36f4ee880fc77f6f99d": "1d3d2420b8e6214186643704361ad495",
".git/objects/a9/bc3d6b6a6ceb916069d7578d93498cdb388f71": "1e3ef0a475b69557208129752c9fe916",
".git/objects/d5/e7d657a645ce5e605a6f13ed06def8b5422d22": "5f3f218bb99f6af0aec38fe00f2884c3",
".git/objects/aa/ba59cf615026be7b5a7538036e2a4b1976cfa0": "bb72b06c707548cd4d6136d5dbc80b84",
".git/objects/aa/a1293063bbb0714d423407d3fb25c7b9f3eec3": "817eda9b736036f879af5dc2ea293c4e",
".git/objects/aa/de9218930c4010e3d3295e030568237b0617a8": "daa85a1eb93bf827a187fa0ee04dbe6a",
".git/objects/db/07a38c15194bac2e39224e989707ad17780fc0": "a3c171cdfb49d5923946683741ab1ca6",
".git/objects/a8/0e3b32a77f35b94b1d2bfbe77cff641579dda2": "941c08852d617027305b1b425b5611f3",
".git/objects/c3/3da097ec3e9cbf0e302ce6f168bf28556591ea": "2e84464a75493bfd1fa62d1b9441ce04",
".git/objects/f9/bd2d36782b6b4b283636ea842b2ce48d26a9d4": "758fba9c222c6f305c817d956bc977bd",
".git/objects/f0/6f4d08325b0e468153b1bff4421d20cdc5f8dd": "b0282d292661245d333ae1f6bc46142f",
".git/objects/c2/a6ce51664ec761e4d58620e759af5caf0eee82": "094a80e55dddfd06f21264ab3a4b60c4",
".git/objects/c2/48da1a86df8f68d6d8d23fcd78b51d3bfb499a": "88384203e6b3972288dc7231103dec1d",
".git/objects/f8/33d365b87f0839b6c0e9bd301848a57d9f9be2": "5917693ad15634e15525568df49bcf14",
".git/objects/2c/1d7aa3dd27a298330d3bb57008d18f0c57a64b": "195caeeb04725301116dd1efefe80c41",
".git/objects/2d/fec51e9be65b7b134b0c437625c07b57a42490": "da9a98b8c7a02fcf5fd672fb545dc0c4",
".git/objects/41/7d46f14c70049cd3de495b54b39aa31f2cadc3": "471e03e78911ad910e2dc0b1aa674d4b",
".git/objects/41/c434ae2232bb6017c6d8e5dffc928cf2bc6743": "7105bee48449f92b00e5aba8508da917",
".git/objects/1b/88556c21128092d98a91d8725347b8e2a15f1c": "fba29a7fab59cd7ecf0b56e623cdda7c",
".git/objects/77/5e1d5fd31f97c713041c6698d029972a7289e7": "eb30809af4dda9f00143928c56de69f1",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/1e/77b4e39bc0ab7ec2f96e9406ec256042e584e7": "6e853dc0b5edd9889dcfa230f2a2a65d",
".git/objects/24/b9c5754ca2af5e20418cfa6ccde69b3709f70d": "0eb1abc54fcafbe15d0bbd378a771dcb",
".git/objects/23/9bccdd6fd366f6934284ee55429a69a0c128c7": "b98b8106dc4dc6d2b5c09bb5fd0e0f74",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/1d/93841331472d7f2f89056daf44886c43e44e9d": "dc7975e96e4772dc2662f0aaf3022e75",
".git/objects/1d/bac030b8d47e73579a69e19c613c64abb3a8a0": "4d3c1a4ccdde2da6250e7c59e4e373c0",
".git/objects/1c/1f98690cca58cf7cb118cfe66c37a269740e7d": "18e002d1e8f87b7e0f21adb18c2a1918",
".git/objects/1c/f512ab3f1a8c119bae7b8ddd13dd72e6de2435": "186bf5e940b79d696bd28f3d496a348e",
".git/objects/82/adc9751e7394406d5035ab847a1330ae3cbf84": "9d36e6ea71186b45834776f10d933689",
".git/objects/49/b6b6bf9a76e4f20bc97a944ebb5e7d0464a61a": "dfb76ace4bd31ccf8db60011e37078d8",
".git/objects/49/41a4abdc994d7095ca429366f51f8c8583db1e": "3ca0165681d2e66cdc089c3281136223",
".git/objects/40/8d1161fb142fb4a7c3af3631d3e3f89a5a19ae": "b948ed0fb282aabbbe890c8052c5b239",
".git/objects/47/a2ba93cb5cdba58ac9c23f4186686406d94a21": "dfa502f035f7edb2d8bf682c82524048",
".git/objects/7f/2710db147d974aa83400da9628242f29bd6801": "22543cf8202ee619a83ab908bb22760f",
".git/objects/22/cc56802235fd61531b515802cd186ee7b9a6c6": "8e496c2ce4762b5edc30afb9237f92cb",
".git/objects/25/09b5311eed0f3d54d567a7c4050bb34b011e6b": "0e6ef07e1c10afc9009613d4d424486a",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3803e4c9231b21393a5e169f2f2b398f",
".git/logs/refs/heads/main": "3803e4c9231b21393a5e169f2f2b398f",
".git/logs/refs/remotes/origin/HEAD": "69e4178fb9dbe5e377a41ce540d347da",
".git/logs/refs/remotes/origin/main": "8ebb17b6b5b227a1bbaf91c78a3e29f5",
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
".git/refs/heads/main": "3bfdf3c4b96b755ae1b54cb302e23079",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "3bfdf3c4b96b755ae1b54cb302e23079",
".git/index": "6a6c4bc4babeace14809de217ce8ae79",
".git/packed-refs": "21a02815b079d258c23cdf1f82f3fa34",
".git/COMMIT_EDITMSG": "cafba385846bc9bac506aaeecbd8bd19",
".git/FETCH_HEAD": "7800325175451a7473735c0383d44e28",
"assets/AssetManifest.json": "9eed91434b1447847208b42a290607c8",
"assets/NOTICES": "0f4bb10ef31c3e3d920a495f43bfb559",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "e7cd109bdbfbb63ec2c126c42985cb7c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "4ef9893efa01cfda3949bb8a030ea494",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "658b490c9da97710b01bd0f8825fce94",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5070443340d1d8cceb516d02c3d6dee7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d7791ef376c159f302b8ad90a748d2ab",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "0ff7447b73f16f864a97603dcbd26423",
"assets/fonts/MaterialIcons-Regular.otf": "780e1bfb9e41d40958f9410aaa5d81f2",
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
"assets/assets/loading.gif": "6be42b58e145fc4bd8ef4618402e98fb",
"assets/assets/icons/vscode.svg": "9dd77a384a813c15891e267eb791c77c",
"assets/assets/icons/facebook_.jpg": "ef484a9f4cc8d14e36cbd2e498529814",
"assets/assets/icons/facebook_.png": "830deb491f362f6d723a6777b183a478",
"assets/assets/icons/android.svg": "d33d14f9659ffe3c8aa818f9aee319c7",
"assets/assets/icons/home.svg": "4429324a4e964788eb6a988a3c0a3763",
"assets/assets/icons/firebase.svg": "ca478b88f589bc8715b6d27d311bcfaa",
"assets/assets/icons/github.svg": "c23a95fcb4b1d25765107e4e73b06438",
"assets/assets/icons/sql.svg": "d9bb541c109c77eda30775bf5f7898d5",
"assets/assets/icons/flutter.png": "1105c9a994c1a6638daed558d5b631fd",
"assets/assets/icons/flutter.svg": "6edd5cc328dcb4bdd9849b9e9aeee647",
"assets/assets/icons/instagram.svg": "abfe70361d37471fb39f7967cc33ed16",
"assets/assets/icons/linkedin_.png": "85b49f7011413bf40c16815966d41729",
"assets/assets/icons/download.svg": "628700a3031424d215a441fab2da1731",
"assets/assets/icons/twitter-154-svgrepo-com.svg": "7cba76736f7e19c9b4d99b520aa58802",
"assets/assets/icons/twitter_.png": "d70a5b61b2e03914a26543a0d3d92ee8",
"assets/assets/icons/check.svg": "4220c82511cc1dfb40b8bba7d25c5f55",
"assets/assets/icons/whatsapp-128-svgrepo-com.svg": "b39ff32cdcba88c8cd3131aeafb87778",
"assets/assets/icons/instagram_.png": "c0f92314c55f88b64baec18a76b478f8",
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
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
