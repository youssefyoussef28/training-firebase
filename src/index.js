import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBDglr853uciMYQ4Dyizrba0Nv8b6ZaheQ",
  authDomain: "fir-9-dojo-65e47.firebaseapp.com",
  projectId: "fir-9-dojo-65e47",
  storageBucket: "fir-9-dojo-65e47.appspot.com",
  messagingSenderId: "429081902893",
  appId: "1:429081902893:web:9375328ce78e02cb6e5da4",
};
// Init firebase app -  Connecting this frontend to the firebase backend
initializeApp(firebaseConfig);

// init services
const db = getFirestore();

// collection ref
const colRef = collection(db, "books");

// get collection data
getDocs(colRef)
  .then((snapshot) => {
    let books = [];
    snapshot.docs.forEach((doc) => {
      books.push({ ...doc.data(), id: doc.id });
    });
    console.log(books);
  })
  .catch((err) => {
    console.log(err.message);
  });

  