// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "chatai-5aa04.firebaseapp.com",
  projectId: "chatai-5aa04",
  storageBucket: "chatai-5aa04.firebasestorage.app",
  messagingSenderId: "561133443634",
  appId: "1:561133443634:web:9a535462e5c0387e40fa2b",
  measurementId: "G-8V1SCE3QXT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app)
export const googleProvider=new GoogleAuthProvider()