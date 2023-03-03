import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";

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

// queries

const q = query(colRef, where("author", "==", "patrick rothfuss"));

// Gets once collection data

// getDocs(colRef).then((snapshot) => {});

// Runs once initially & runs every-time Change - real-time

onSnapshot(q, (snapshot) => {
  let books = [];
  snapshot.docs.forEach((doc) => {
    books.push({ ...doc.data(), id: doc.id });
  });
  console.log(books);
});

// adding docs
const addBookForm = document.querySelector(".add");
addBookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addDoc(colRef, {
    title: addBookForm.title.value,
    author: addBookForm.author.value,
  }).then(() => {
    addBookForm.reset();
  });
});

// deleting docs
const deleteBookForm = document.querySelector(".delete");
deleteBookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const docRef = doc(db, "books", deleteBookForm.id.value);

  deleteDoc(docRef).then(() => {
    deleteBookForm.reset();
  });
});
