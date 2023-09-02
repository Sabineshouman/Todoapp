import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9iURMiO57LzWz7i0hpOYZZd1VpK41j9A",
  authDomain: "todoapp1-e7dfb.firebaseapp.com",
  projectId: "todoapp1-e7dfb",
  storageBucket: "todoapp1-e7dfb.appspot.com",
  messagingSenderId: "108960114826",
  appId: "1:108960114826:web:e9bbe15e9f8ed0e3356573",
  measurementId: "G-70JDGT5KL5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
