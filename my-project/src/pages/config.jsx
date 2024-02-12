
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from  "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDa9v8YF9g5QF-mMOmlF7qjl291z1tUJo8",
  authDomain: "my-project-5871f.firebaseapp.com",
  projectId: "my-project-5871f",
  storageBucket: "my-project-5871f.appspot.com",
  messagingSenderId: "686609548746",
  appId: "1:686609548746:web:58a2a86ad960eebbf37b33",
  measurementId: "G-VJF36JGQ4J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};
