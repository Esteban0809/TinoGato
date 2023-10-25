// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQauBv28vQsTA7zqjeUGR6jCOv8eOVGbQ",
  authDomain: "tinogato-b3bc4.firebaseapp.com",
  projectId: "tinogato-b3bc4",
  storageBucket: "tinogato-b3bc4.appspot.com",
  messagingSenderId: "801289567980",
  appId: "1:801289567980:web:01c2654354fbbced68afc9",
  measurementId: "G-QBL2P1YWEF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);