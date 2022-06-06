import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyC4-NoAVlEOS4DXpH7ZVYeQVopD-S_e_zc",
    authDomain: "e-ride-7a137.firebaseapp.com",
    projectId: "e-ride-7a137",
    storageBucket: "e-ride-7a137.appspot.com",
    messagingSenderId: "384704665429",
    appId: "1:384704665429:web:503b6d206785e4ca2601dc"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
