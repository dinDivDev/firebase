// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

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

//Firebase authentication

export const auth = getAuth(app);

// Sign in with an existing Email //password authentication

export const signInWithAnEmail = async (email, password) => {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(" sign in error : ", error);
  }
};

export const signUp = async (email, password) => {
  try {
    return await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(" sign up error ");
  }
};
