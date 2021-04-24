import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDx-KhxS_5MbPNalxvx_iRJeiUcy1EkMdA",
  authDomain: "react-m-b8aa0.firebaseapp.com",
  projectId: "react-m-b8aa0",
  storageBucket: "react-m-b8aa0.appspot.com",
  messagingSenderId: "493857411989",
  appId: "1:493857411989:web:1ecfbaa3ee48788c3d9c9c",
  measurementId: "G-3WYW7DCMH1"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;
