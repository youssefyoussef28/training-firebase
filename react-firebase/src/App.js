import "./App.css";
import { useEffect, useState } from "react";
import { app, database } from "./firebaseConfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import {
  collection,
  addDoc,
  getFirestore,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { async } from "@firebase/util";

function App() {
  // State
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [array, setArray] = useState([]);

  const auth = getAuth();
  const dbInstance = collection(database, "users");
  // Input
  const handleInputs = (e) => {
    let inputs = { [e.target.name]: e.target.value };
    setData({ ...data, ...inputs });
  };
  // Submit
  const handleSubmit = () => {
    addDoc(dbInstance, data)
      .then(() => {
        alert("Data was Sent!");
      })
      .catch((error) => {
        alert(error.message);
      });
    // signInWithEmailAndPassword(auth, data.email, data.password)
    //   .then((response) => {
    //     console.log(response.user);
    //   })
    //   .catch((err) => {
    //     alert(err.message);
    //   });
  };

  const getData = async () => {
    const data = await getDocs(dbInstance);
    setArray(
      data.docs.map((item) => {
        return { ...item.data(), id: item.id };
      })
    );
  };

  const updateData = (id) => {
    let dataToUpdate = doc(database, "users", id);
    updateDoc(dataToUpdate, {
      name: "Jooooo",
      email: "joo@gmail.com",
    })
      .then(() => {
        alert("Data Updated");
        getData();
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const deleteData = (id) => {
    let dataToDelete = doc(database, "users", id);
    deleteDoc(dataToDelete);
    getData();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App-header">
      <input
        className="input-fields"
        type="text"
        placeholder="Name"
        name="name"
        onChange={(e) => handleInputs(e)}
      />
      <input
        className="input-fields"
        type="email"
        placeholder="Email"
        name="email"
        onChange={(e) => handleInputs(e)}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        className="input-fields"
        onChange={(e) => handleInputs(e)}
      />
      <button onClick={getData}>Send</button>
      {array.map((item) => {
        return (
          <div>
            <p>{item.name}</p>
            <p>{item.email}</p>
            <p>{item.password}</p>
            <button onClick={() => updateData(item.id)}>Update</button>
            <button onClick={() => deleteData(item.id)}>Delete</button>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default App;
