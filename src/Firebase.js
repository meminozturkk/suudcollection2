// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyDiSxADS-Klq41aC_O3HpepLH5jM-nE9m4",
    authDomain: "suudcollection-bff2c.firebaseapp.com",
    projectId: "suudcollection-bff2c",
    storageBucket: "suudcollection-bff2c.appspot.com",
    messagingSenderId: "738049446121",
    appId: "1:738049446121:web:52d786bd42a25ee5616078"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export default db;
