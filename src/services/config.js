import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCuSO1wkYEsDmZ-_iDo3oZ5c9uOrVWKfxI",
  authDomain: "mundovigil-21d18.firebaseapp.com",
  projectId: "mundovigil-21d18",
  storageBucket: "mundovigil-21d18.appspot.com",
  messagingSenderId: "829228155280",
  appId: "1:829228155280:web:836e7f6bb3069a8e58f315"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);