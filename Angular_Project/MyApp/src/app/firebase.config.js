// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8iqCu2uiMzX-vKZA8TfTOIHrB9etcn3E",
  authDomain: "my-app-angular-770a0.firebaseapp.com",
  projectId: "my-app-angular-770a0",
  storageBucket: "my-app-angular-770a0.appspot.com",
  messagingSenderId: "646145462682",
  appId: "1:646145462682:web:185abc6e1f66da39866a23",
  measurementId: "G-6RBC07T9QT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
