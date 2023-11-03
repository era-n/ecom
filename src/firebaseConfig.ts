// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMYPW4nsNxcgS89JDWKupUIBtr3OB2tKk",
  authDomain: "ecom-574ec.firebaseapp.com",
  projectId: "ecom-574ec",
  storageBucket: "ecom-574ec.appspot.com",
  messagingSenderId: "417262654229",
  appId: "1:417262654229:web:729e5327e2ba6175c64f1c",
  measurementId: "G-8NVP45XFTE",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
