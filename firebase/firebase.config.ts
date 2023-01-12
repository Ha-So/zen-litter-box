// // Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// //import firebase from "firebase";
// import { getAnalytics } from 'firebase/analytics';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.SERVICE_FIREBASE_API_KEY,
//   authDomain: process.env.SERVICE_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.SERVICE_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.SERVICE_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.SERVICE_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// };

// const serviceConfig = {
//   type: process.env.SERVICE_FIREBASE_TYPE,
//   project_id: process.env.SERVICE_FIREBASE_PROJECT_ID,
//   private_key_id: process.env.SERVICE_FIREBASE_PRIVATE_KEY_ID,
//   private_key: process.env.SERVICE_FIREBASE_PRIVATE_KEY,
//   client_email: process.env.SERVICE_FIREBASE_CLIENT_EMAIL,
//   client_id: process.env.SERVICE_FIREBASE_CLIENT_ID,
//   auth_uri: process.env.SERVICE_FIREBASE_AUTH_URI,
//   token_uri: process.env.SERVICE_FIREBASE_TOKEN_URI,
//   auth_provider_x509_cert_url: process.env.SERVICE_FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
//   client_x509_cert_url: process.env.SERVICE_FIREBASE_CLIENT_X509_CERT_URL,
// }

// // Initialize Firebase
// //const app = initializeApp(firebaseConfig);
// //const analytics = getAnalytics(app);
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// // const analytics = getAnalytics(app);

// export default db;