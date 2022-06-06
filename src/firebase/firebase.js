// firebase.js

import * as firebase from 'firebase/app';
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBbH3xixzya2HF7QcxzSuf3g4-EBE5mAR4",
    authDomain: "front-end-82c91.firebaseapp.com",
    projectId: "front-end-82c91",
    storageBucket: "front-end-82c91.appspot.com",
    messagingSenderId: "895633365015",
    appId: "1:895633365015:web:2286c154584e3934266452",
    measurementId: "G-XZVM8LEY65"
  };
/*
const firebaseConfig = {
  apiKey: process.env.DEV_API_KEY,
  authDomain: process.env.DEV_AUTH_DOMAIN,
  databaseURL: process.env.DEV_DATABASE_URL,
  projectId: process.env.DEV_PROJECT_ID,
  storageBucket: process.env.DEV_STORAGE_BUCKET,
  messagingSenderId: process.env.DEV_MESSAGING_SENDER_ID,
  appId: process.env.DEV_APP_ID,
  measurementId: process.env.DEV_MEASUREMENT_ID
};*/

// firebase.js

export const app = firebase.initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
if (process.env.NODE_ENV !== 'production') {
    //const analytics = getAnalytics(app);
}

export default firebase;
