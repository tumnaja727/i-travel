import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAOywKBID3-9GuRpqDTgMmnIfyBx7FuBnY",
    authDomain: "itravel-90732.firebaseapp.com",
    databaseURL: "https://itravel-90732.firebaseio.com",
    projectId: "itravel-90732",
    storageBucket: "itravel-90732.appspot.com",
    messagingSenderId: "44522302328",
    appId: "1:44522302328:web:50abb8b34ba9e1113df68d"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;