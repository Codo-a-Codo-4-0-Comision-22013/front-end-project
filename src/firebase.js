import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyBJaU3I6MjGu3I6hEhC6fDM4lda-lygejA",
authDomain: "qatar-2022-a1dba.firebaseapp.com",
projectId: "qatar-2022-a1dba",
storageBucket: "qatar-2022-a1dba.appspot.com",
messagingSenderId: "191463948423",
appId: "1:191463948423:web:dcee3f4bd383ec134b7822"
  // put your credentials here
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
