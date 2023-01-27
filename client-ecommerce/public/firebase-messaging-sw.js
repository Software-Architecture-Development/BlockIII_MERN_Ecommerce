/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/8.6.8/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.6.8/firebase-messaging.js')

// firebaseConfig is required
const firebaseConfig = {
    apiKey: "AIzaSyD00OQrbQEgLlf7DgOJhwKXj_Ff20KwTWo",
    authDomain: "namaste-2a7ee.firebaseapp.com",
    projectId: "namaste-2a7ee",
    storageBucket: "namaste-2a7ee.appspot.com",
    messagingSenderId: "985513825477",
    appId: "1:985513825477:web:7103cd6fdb339c7eec8cac",
    measurementId: "G-LPJL7K3P56"
  };

firebase.initializeApp(firebaseConfig)

const messaging = firebase.messaging()

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload)
  const notificationTitle = payload.notification.title
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon || payload.notification.image,
  }

  self.registration.showNotification(notificationTitle, notificationOptions)
})

self.addEventListener('notificationclick', (event) => {
  if (event.action) {
    clients.openWindow(event.action)
  }
  event.notification.close()
})