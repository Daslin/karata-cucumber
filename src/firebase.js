// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBEsLpRHDb2gfLAIdBEuyIX3gUOL00WCQQ",
    authDomain: "tinder-clone-6be98.firebaseapp.com",
    projectId: "tinder-clone-6be98",
    storageBucket: "tinder-clone-6be98.appspot.com",
    messagingSenderId: "1066555338570",
    appId: "1:1066555338570:web:99536a814b74e06d6fdbb3",
    measurementId: "G-QGJ6RF3GFK"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;