import env from "react-dotenv";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBY-EXI6sFcPX7ddWG-943bgwcCB2fHCkc",
  authDomain: "levelup-proyecto1.firebaseapp.com",
  projectId: "levelup-proyecto1",
  storageBucket: "levelup-proyecto1.appspot.com",
  messagingSenderId: "872806607730",
  appId: "1:872806607730:web:224bcdad0ac126b40c8beb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
