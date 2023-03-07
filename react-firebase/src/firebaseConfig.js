// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwFww_IYdVt1zqN25_EIO8f81688dvmXs",
  authDomain: "react-firebase-28ec4.firebaseapp.com",
  projectId: "react-firebase-28ec4",
  storageBucket: "react-firebase-28ec4.appspot.com",
  messagingSenderId: "1010626686947",
  appId: "1:1010626686947:web:fac01baec0abb7b5693ad6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
