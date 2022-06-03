import * as firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.DEV_API_KEY,
  authDomain: process.env.DEV_AUTH_DOMAIN,
  databaseURL: process.env.DEV_DATABASE_URL,
  projectId: process.env.DEV_PROJECT_ID,
  storageBucket: process.env.DEV_STORAGE_BUCKET,
  messagingSenderId: process.env.DEV_MESSAGING_SENDER_ID,
  appId: process.env.DEV_APP_ID,
  measurementId: process.env.DEV_MEASUREMENT_ID
};


export const app = firebase.initializeApp(firebaseConfig);
if (process.env.NODE_ENV !== 'production') {
}

export default firebase;