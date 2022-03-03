// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDtBXS2OGyGb59SNxCEdG_SmT5iPAsCzEE",
    authDomain: "lets-chatty.firebaseapp.com",
    projectId: "lets-chatty",
    storageBucket: "lets-chatty.appspot.com",
    messagingSenderId: "877015013981",
    appId: "1:877015013981:web:6626e4280d1362a2cdcbb4",
    measurementId: "G-RZGGBVSTTM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);