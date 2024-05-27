
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAiXVu1wY7LYwNTH6FP428S0QxNYv3FKTI",
  authDomain: "joao-fi.firebaseapp.com",
  projectId: "joao-fi",
  storageBucket: "joao-fi.appspot.com",
  messagingSenderId: "500936006125",
  appId: "1:500936006125:web:ad9ef1260c5651e203efe4",
  measurementId: "G-HZ02V2ER3K"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export { auth };