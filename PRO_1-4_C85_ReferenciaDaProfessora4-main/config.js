import firebase from "firebase";
require("@firebase/firestore");

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBW3mhjB_SHGZj_RbgXtc7i1WAHXKQnGWc",
  authDomain: "ciclista-eletronico-2ac2a.firebaseapp.com",
  projectId: "ciclista-eletronico-2ac2a",
  storageBucket: "ciclista-eletronico-2ac2a.appspot.com",
  messagingSenderId: "277237336697",
  appId: "1:277237336697:web:700244a8486fcc508b62a8",
  measurementId: "G-R4F0Z4644E"
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
