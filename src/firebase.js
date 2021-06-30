// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyD89T02Yn9-ZrDCE3CopfvdiWHBeGRcgLc",
    authDomain: "clone-94437.firebaseapp.com",
    projectId: "clone-94437",
    storageBucket: "clone-94437.appspot.com",
    messagingSenderId: "1074750725049",
    appId: "1:1074750725049:web:a12d3a2cb1bab3f45b7468",
    measurementId: "G-63QDFSCTDW"
  });

const db = firebase.firestore();

export { db }