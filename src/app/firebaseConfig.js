
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAVyXFzUAzwUFjZGab4fEb4rnosCpvXpzU",
  authDomain: "spotta-3edd2.firebaseapp.com",
  projectId: "spotta-3edd2",
  storageBucket: "spotta-3edd2.appspot.com",
  messagingSenderId: "481352467718",
  appId: "1:481352467718:web:1716b38ad842b2cd940a87",
  measurementId: "G-EQHKDFL16S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}
