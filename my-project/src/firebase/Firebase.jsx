
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCe-eKtclp2WZKwmRU6ll1zYY58wbOHlZM",
  authDomain: "auth-38dd6.firebaseapp.com",
  projectId: "auth-38dd6",
  storageBucket: "auth-38dd6.appspot.com",
  messagingSenderId: "1024509991867",
  appId: "1:1024509991867:web:cc16dd99f50567ffa4829e"
};

const app = initializeApp(firebaseConfig);
export const fireDB = getFirestore(app); //this app is inside the firestore so whenver we want to store anything we can store it in the fireDB 

