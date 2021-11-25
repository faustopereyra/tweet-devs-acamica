import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbdsHaLukACx8upH8j1ddtI6ahI7IL8Kw",
  authDomain: "twitter-dev-d3e1c.firebaseapp.com",
  projectId: "twitter-dev-d3e1c",
  storageBucket: "twitter-dev-d3e1c.appspot.com",
  messagingSenderId: "575422251088",
  appId: "1:575422251088:web:f85e317988387088fdd155",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
