// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD0NueabDF2yqbuvxUzm80J3q2nLoZaSWs",
    authDomain: "edu-coures-auth.firebaseapp.com",
    projectId: "edu-coures-auth",
    storageBucket: "edu-coures-auth.appspot.com",
    messagingSenderId: "946848405389",
    appId: "1:946848405389:web:b269e2637633b25e5ecfc4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;