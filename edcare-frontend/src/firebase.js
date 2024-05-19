// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "edcare-92d29.firebaseapp.com",
  projectId: "edcare-92d29",
  storageBucket: "edcare-92d29.appspot.com",
  messagingSenderId: "589165070096",
  appId: "1:589165070096:web:2dadefd01e84940f500795",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
