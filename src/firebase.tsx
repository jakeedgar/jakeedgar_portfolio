import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const { getFirestore, collection, getDocs } = require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyAwD-Jrxk5uV3SnO1ie2vWABp-3BgOKQHI",
  authDomain: "my-website-5adba.firebaseapp.com",
  projectId: "my-website-5adba",
  storageBucket: "my-website-5adba.appspot.com",
  messagingSenderId: "389354983552",
  appId: "1:389354983552:web:b3c25959741166bac51665"
};

firebase.initializeApp(firebaseConfig);
const databaseRef = firebase.database().ref();
export const projectRef = databaseRef.child("projects")

export default firebase;