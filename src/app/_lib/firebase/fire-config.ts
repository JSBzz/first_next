// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKNK6wX6EKig7WgFAxl4lVMJ2hRHGtwPE",
  authDomain: "chat-cf5ac.firebaseapp.com",
  projectId: "chat-cf5ac",
  storageBucket: "chat-cf5ac.appspot.com",
  messagingSenderId: "415232525084",
  appId: "1:415232525084:web:279dbdac158732e6fb70d9",
  measurementId: "G-LL1GQ8QD9Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export default db;
