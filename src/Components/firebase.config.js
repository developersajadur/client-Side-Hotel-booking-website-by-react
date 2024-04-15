// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkvlyBGeQeR9uFPI7Xb8M3G5EABs6cgpc",
  authDomain: "residential-hotel-2375e.firebaseapp.com",
  projectId: "residential-hotel-2375e",
  storageBucket: "residential-hotel-2375e.appspot.com",
  messagingSenderId: "276144893999",
  appId: "1:276144893999:web:d75e1e46a514f0e3f496da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;