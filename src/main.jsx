import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCuSO1wkYEsDmZ-_iDo3oZ5c9uOrVWKfxI",
  authDomain: "mundovigil-21d18.firebaseapp.com",
  projectId: "mundovigil-21d18",
  storageBucket: "mundovigil-21d18.appspot.com",
  messagingSenderId: "829228155280",
  appId: "1:829228155280:web:836e7f6bb3069a8e58f315",
  measurementId: "G-BP01E7BRDZ"
};


//const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(<App />,
)
