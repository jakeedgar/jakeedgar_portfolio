import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const { getFirestore, collection, getDocs } = require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyCqaOXfa6ePu-aYvJOz7GSo6t6o_auByLY",
  authDomain: "my-professional-site-f5981.firebaseapp.com",
  projectId: "my-professional-site-f5981",
  databaseURL: "/Projects/SwCGJLigXJVzHXkegpC1",
  storageBucket: "my-professional-site-f5981.appspot.com",
  messagingSenderId: "818561684570",
  appId: "1:818561684570:web:baf4524bd850beeb603463",
  measurementId: "G-1G8156WBV7"
};

firebase.initializeApp(firebaseConfig);
const databaseRef = firebase.database().ref();
export const projectRef = databaseRef.child("projects")

export default firebase;