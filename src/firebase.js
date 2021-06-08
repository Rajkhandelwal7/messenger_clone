import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp =  firebase.initializeApp({
  apiKey: "AIzaSyAMs0SyxXJ-3xXEo5VAlfEi39xfIvye8V0",
  authDomain: "messenger-clone-34a64.firebaseapp.com",
  projectId: "messenger-clone-34a64",
  storageBucket: "messenger-clone-34a64.appspot.com",
  messagingSenderId: "129959124534",
  appId: "1:129959124534:web:5d23d593a88f1281860297",
  measurementId: "G-QZW08W76C6"
  });
  const db=firebaseApp.firestore();
  export  default db;