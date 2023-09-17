// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCiP1HhQh6nM18hw7CsnjbZzj-iCd1R-4A",
  authDomain: "react-authentication-5b4d4.firebaseapp.com",
  projectId: "react-authentication-5b4d4",
  storageBucket: "react-authentication-5b4d4.appspot.com",
  messagingSenderId: "41279448924",
  appId: "1:41279448924:web:f41199248188d8b7314399",
  measurementId: "G-KMYK6B00FK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  let auth=getAuth(app);

export default app;