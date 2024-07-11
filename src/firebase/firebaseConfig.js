import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJmr-Zas-oGNks7-LzIZs5RV314PX51HA",
  authDomain: "my-acc-b12d8.firebaseapp.com",
  projectId: "my-acc-b12d8",
  storageBucket: "my-acc-b12d8.appspot.com",
  messagingSenderId: "436066898478",
  appId: "1:436066898478:web:1cdea6c79e5a6fe55185bf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//auth
export const auth = getAuth(app);

//db
export const db = getFirestore(app);
