import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCcqlJ0v_UxNX9ODyeFsgfIErZ1OLqcJ7k",
  authDomain: "beyond-the-boundaries.firebaseapp.com",
  projectId: "beyond-the-boundaries",
  storageBucket: "beyond-the-boundaries.appspot.com",
  messagingSenderId: "720230825582",
  appId: "1:720230825582:web:bd56d116700b054ea9b07f",
  measurementId: "G-NKD34G4DJW",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timeStampsInSnapshots: true, merge: true });

export default firebase;
