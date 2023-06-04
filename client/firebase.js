// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1Vu28WWGKIK5qcMQteb_POxXr2bW277Y",
  authDomain: "learn-ai-eb50b.firebaseapp.com",
  projectId: "learn-ai-eb50b",
  storageBucket: "learn-ai-eb50b.appspot.com",
  messagingSenderId: "407924656405",
  appId: "1:407924656405:web:ba29128e43f750cb5fc11c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
