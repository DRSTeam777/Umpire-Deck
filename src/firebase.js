import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDzv9taGjfmfXJq_X_Q6FzFsQHATcoJXX4",
  authDomain: "auth-login-44551.firebaseapp.com",
  projectId: "auth-login-44551",
  storageBucket: "auth-login-44551.appspot.com",
  messagingSenderId: "481092970854",
  appId: "1:481092970854:web:9026931d516c70317140a7",
  measurementId: "G-N6PZG0EEZ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;