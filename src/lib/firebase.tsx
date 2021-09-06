import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/functions";

const firebaseConfig = {

    apiKey: "AIzaSyBn9k30JgylskGuIppom2hL-6ah51XiPIs",
  
    authDomain: "are-you-bored-1daac.firebaseapp.com",
  
    projectId: "are-you-bored-1daac",
  
    storageBucket: "are-you-bored-1daac.appspot.com",
  
    messagingSenderId: "1050579796092",
  
    appId: "1:1050579796092:web:a274982b179e0867c6c9f9",
  
    measurementId: "G-DWYM13Z7T1"
  
  };
  

// const env = process.env.NODE_ENV;

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialise Firebase
// Auth exports
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

// Firestore exports
export const firestore = firebase.firestore();
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
export const fromMillis = firebase.firestore.Timestamp.fromMillis;
export const increment = firebase.firestore.FieldValue.increment;
export const fieldValue = firebase.firestore.FieldValue;

// Functions exports
export const functions = firebase.app().functions();

// Emulators if working locally