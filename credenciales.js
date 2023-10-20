// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzj0E9s078ajPFXl-winHrfRVXHdMmz5Q",
  authDomain: "appnotes-ddb2a.firebaseapp.com",
  projectId: "appnotes-ddb2a",
  storageBucket: "appnotes-ddb2a.appspot.com",
  messagingSenderId: "634382474032",
  appId: "1:634382474032:web:a3a5d4d75deb61613546f5",
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;
