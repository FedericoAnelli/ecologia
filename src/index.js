import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, HashRouter } from 'react-router-dom'; 
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBsheYPMcEM77lwMskY9Y3kaHeMPGQFdj0",
    authDomain: "ecologia-ec495.firebaseapp.com",
    projectId: "ecologia-ec495",
    storageBucket: "ecologia-ec495.appspot.com",
    messagingSenderId: "866784523458",
    appId: "1:866784523458:web:22fe3f7e3aac61ef21775b",
    measurementId: "G-X2KZHTGJ70"
  };

  const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter basename='/'>
    <App />
    </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
