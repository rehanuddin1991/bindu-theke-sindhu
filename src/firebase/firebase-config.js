 
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
 
const firebaseConfig = {
  apiKey: "AIzaSyAfXXXATQOAmwlnmvRz6vbud7qHp5IIvis",
  authDomain: "bindu-theke-sindhu.firebaseapp.com",
  projectId: "bindu-theke-sindhu",
  storageBucket: "bindu-theke-sindhu.appspot.com",
  messagingSenderId: "390085525870",
  appId: "1:390085525870:web:b6062d238648018166817f",
  measurementId: "G-2XTXQ55CBB"
};

 
const app = initializeApp(firebaseConfig);
export   const auth = getAuth(app);