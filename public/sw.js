const CACHE_NAME = "Quiz_App";
const urlsToCache = [

  '/',
  '/index.html',
  "/static/js/bundle.js",
  "/static/js/2.chunk.js",
  "/static/js/main.chunk.js",
  "/static/media/ian-badenhorst-SuT2MhkdyBQ-unsplash.20d1792a.jpg",
  "/manifest.json",
  "/quizIcon.svg",
  "/main.684415c94e4b4b6f0601.hot-update.js"
  // "/API.ts",
  // "/App.tsx",
  // "https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple"
]

// Activate the service worker
// only keeps the cache we need and delete rest of them



this.addEventListener("instal" , function(event){
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(function (cache){})
  )
})

// INSTALL SERVICE WORKER
this.addEventListener("install" , (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then((cache) => {
      cache.addAll(urlsToCache);
    })
  )
})


// FETCH THE CACHE DATA
this.addEventListener('fetch', function (event) {

  event.respondWith(

    caches.match(event.request)
      .then(function (response) {
        // Cache hit - return response
        if (response) {
          return response;

        }
        return fetch(event.request);

      }
      )
  );
});

this.addEventListener("activate" , (e) => {
  console.log("Service worker activate");
})

