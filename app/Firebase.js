// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnJP5oo8Mz7HTHj7umpszl9it11Tx8fG4",
  authDomain: "portfolio-ivann.firebaseapp.com",
  projectId: "portfolio-ivann",
  storageBucket: "portfolio-ivann.appspot.com",
  messagingSenderId: "1040587890113",
  appId: "1:1040587890113:web:5944f86ca6ab93e6706340",
  measurementId: "G-35RG0DBHP7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);