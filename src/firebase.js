// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABa9SeM0wx4lAIZgtOajv2oUszJF-kiSI",
  authDomain: "igo-search.firebaseapp.com",
  projectId: "igo-search",
  storageBucket: "igo-search.appspot.com",
  messagingSenderId: "355563487194",
  appId: "1:355563487194:web:dd1da27d5da54348fd4ae3",
  measurementId: "G-4CGMBWHXSV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore (app);

export default db;