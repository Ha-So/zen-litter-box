// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
//import firebase from "firebase";
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.SERVICE_FIREBASE_API_KEY,
  authDomain: process.env.SERVICE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.SERVICE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.SERVICE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.SERVICE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.SERVICE_FIREBASE_APP_ID,
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

export default db;