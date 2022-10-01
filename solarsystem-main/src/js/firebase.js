// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFB8215VrEB_8zooD4iWYUJNj3KRTkOvY",
  authDomain: "moonquake-map-bb02d.firebaseapp.com",
  projectId: "moonquake-map-bb02d",
  storageBucket: "moonquake-map-bb02d.appspot.com",
  messagingSenderId: "398992854624",
  appId: "1:398992854624:web:10cebc67f9853ca49abd05",
  measurementId: "G-3FY6ER8Y43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);