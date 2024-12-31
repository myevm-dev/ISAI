import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDudL5zVgq9Kf2NqogHB05WxdTG3kA52so",
  authDomain: "isai-1e512.firebaseapp.com",
  projectId: "isai-1e512",
  storageBucket: "isai-1e512.firebasestorage.app",
  messagingSenderId: "114653282675",
  appId: "1:114653282675:web:e1115d08ec8f66259a4506",
  measurementId: "G-R0XX97KF2C",
};

// Initialize Firebase (only once)
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Analytics (optional)
const analytics = getAnalytics(app);

export { db, analytics };
