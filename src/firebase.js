import firebase from 'firebase';
import 'firebase/firebase-auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDc6tgMJnHx2W0pfE9AlTRr0K-XT3erTV8",
    authDomain: "lab-burger-queen-81337.firebaseapp.com",
    databaseURL: "https://lab-burger-queen-81337.firebaseio.com",
    projectId: "lab-burger-queen-81337",
    storageBucket: "lab-burger-queen-81337.appspot.com",
    messagingSenderId: "23941171693",
    appId: "1:23941171693:web:c10e51891427ef9d2bbfe4",
    measurementId: "G-351PLDS160"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore()
  firebase.analytics();


  export default firebase;