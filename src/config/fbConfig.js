import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBKQsiqASIjY7Phw8reVYUoUgEmj1Y95UE",
  authDomain: "dsleaderboard.firebaseapp.com",
  projectId: "dsleaderboard",
  storageBucket: "dsleaderboard.appspot.com",
  messagingSenderId: "755720550454",
  appId: "1:755720550454:web:84dc2e89bfc882cbbf4097",
  measurementId: "G-1JHW0WDRE0",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timeStampsInSnapshots: true, merge: true });

export default firebase;
