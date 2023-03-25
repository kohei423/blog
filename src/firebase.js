import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

 
const firebaseConfig = {
  apiKey: "AIzaSyA3aDsMavAyePeEBWXXfWla0AGZ0_Ir_Rk",
  authDomain: "blog-d38c5.firebaseapp.com",
  projectId: "blog-d38c5",
  storageBucket: "blog-d38c5.appspot.com",
  messagingSenderId: "1057612745671",
  appId: "1:1057612745671:web:c1c6d69a7228b4eaa6a7e2",
  measurementId: "G-2TF44GNTVE"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export {auth,provider,db};