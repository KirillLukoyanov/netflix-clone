import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaJ-08hjhZ0bh-CVmgWgH9J8Xm6hBxEvw",
  authDomain: "netflix-clone-f3c27.firebaseapp.com",
  projectId: "netflix-clone-f3c27",
  storageBucket: "netflix-clone-f3c27.appspot.com",
  messagingSenderId: "672467791529",
  appId: "1:672467791529:web:a47f3f99c43b1dae5083b8",
  measurementId: "G-NLYR8CSTK6",
};

const firebase = Firebase.initializeApp(firebaseConfig);

export { firebase };
