import { initializeApp } from "firebase/app";
const { getFirestore } = require('firebase/firestore');

const firebaseConfig = {
   apiKey: "AIzaSyD-nVg7hbAO8hfSXWq2vq8AuWiZP0oP5V8",
   authDomain: "firestore-78b6d.firebaseapp.com",
   projectId: "firestore-78b6d",
   storageBucket: "firestore-78b6d.appspot.com",
   messagingSenderId: "841963979540",
   appId: "1:841963979540:web:7cbc957e5ca0017c9bf801",
   measurementId: "G-36N7FZD03C"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

module.exports = db;
