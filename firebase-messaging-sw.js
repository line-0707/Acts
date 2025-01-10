// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

// Firebaseプロジェクトの設定
const firebaseConfig = {
    apiKey: "AIzaSyBU4w8tyZCI_72ilhWeztfx5hXrwXnZVTI",
    authDomain: "acts-f710f.firebaseapp.com",
    projectId: "acts-f710f",
    storageBucket: "acts-f710f.firebasestorage.app",
    messagingSenderId: "1026378966831",
    appId: "1:1026378966831:web:883700b9bc8bbe425723da"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.icon
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
