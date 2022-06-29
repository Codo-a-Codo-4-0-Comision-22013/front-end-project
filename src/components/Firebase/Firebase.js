import * as firebase from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDx1Oi6erjoY-QDPlovr9LyrruAceD6nCs",
  authDomain: "react-app-cac.firebaseapp.com",
  projectId: "react-app-cac",
  storageBucket: "react-app-cac.appspot.com",
  messagingSenderId: "629915079516",
  appId: "1:629915079516:web:b31edc7f977d4ca5ec2799"
};


export const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);
if (process.env.NODE_ENV !== 'production') {
}

export default firebase;