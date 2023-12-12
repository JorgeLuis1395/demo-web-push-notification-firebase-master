importScripts("https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.23.0/firebase-messaging.js");

firebase.initializeApp(
    {
      apiKey: "AIzaSyCAIyjeG1NXHQiAv8-2w0VzYd_pE0HG0vg",
      authDomain: "test-3db5e.firebaseapp.com",
      projectId: "test-3db5e",
      storageBucket: "test-3db5e.appspot.com",
      messagingSenderId: "724250823288",
      appId: "1:724250823288:web:b6072a45cd4a4895d83b8d",
      measurementId: "G-2QD9T6R259"
      }
)
const messaging= firebase.messaging();
