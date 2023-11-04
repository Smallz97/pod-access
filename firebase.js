// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyDIzR2GFuFJVeFDEsd0mxmYezYJDD2mgsw",
authDomain: "pod-access-landing-page.firebaseapp.com",
projectId: "pod-access-landing-page",
storageBucket: "pod-access-landing-page.appspot.com",
messagingSenderId: "765606740103",
appId: "1:765606740103:web:ed0c2794876e2ed6a0b822",
measurementId: "G-YQST1QYGFV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);