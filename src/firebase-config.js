// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
const firebaseConfig = {
  apiKey: "AIzaSyBayKZNtBddxn9g6t71P5CRIcsGSy5eOK4",
  authDomain: "fir-todo-b5002.firebaseapp.com",
  projectId: "fir-todo-b5002",
  storageBucket: "fir-todo-b5002.appspot.com",
  messagingSenderId: "769940109681",
  appId: "1:769940109681:web:daabe726c2e9e39a669ed0",
  measurementId: "G-KDPLEE9LZQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
