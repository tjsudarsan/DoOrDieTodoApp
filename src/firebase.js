import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDbyUr2_AN8qjQERVdOctnzByStYCxADV8",
  authDomain: "todoapp-832b2.firebaseapp.com",
  databaseURL: "https://todoapp-832b2.firebaseio.com",
  projectId: "todoapp-832b2",
  storageBucket: "",
  messagingSenderId: "763478448486",
  appId: "1:763478448486:web:5389489cb7c8ae232110a7"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

export default firebase;
