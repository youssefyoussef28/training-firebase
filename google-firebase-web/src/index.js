// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, getDocs, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDV-NuFyI7HYb3HeJip301L425l_b_n8lI",
  authDomain: "fir-tutorial-27806.firebaseapp.com",
  projectId: "fir-tutorial-27806",
  storageBucket: "fir-tutorial-27806.appspot.com",
  messagingSenderId: "141752890813",
  appId: "1:141752890813:web:a932bc2f79ed279ce50ed4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const todoCol = collection(db, "todos");
const snapshot = await getDocs(todoCol);
// Detect auth state

onAuthStateChanged(auth, (user) => {
  if (user != null) {
    console.log("Logged in");
  } else {
    console.log("No User");
  }
});
