// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";  


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxeCPGk6iNQo-LUtSO9tgJIoYOI6dKdhI",
  authDomain: "react-and-firebase-e5bfa.firebaseapp.com",
  projectId: "react-and-firebase-e5bfa",
  storageBucket: "react-and-firebase-e5bfa.firebasestorage.app",
  messagingSenderId: "651390389726",
  appId: "1:651390389726:web:9c59a75048fbbff392214f",
  measurementId: "G-TF5TLK1DCW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const fireDB = getFirestore(app);
const auth = getAuth(app);
export { fireDB, auth };