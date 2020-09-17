import firebase, { initializeApp } from"firebase/app"
import "firebase/firestore"
import "firebase/auth"


//Esta configuracion te la da firebase
const firebaseConfig = {
    apiKey: "AIzaSyB4j2mgu4qCLzkzWMutljMFwwtlmEOar5E",
    authDomain: "react-app-cursos-a7706.firebaseapp.com",
    databaseURL: "https://react-app-cursos-a7706.firebaseio.com",
    projectId: "react-app-cursos-a7706",
    storageBucket: "react-app-cursos-a7706.appspot.com",
    messagingSenderId: "14988483476",
    appId: "1:14988483476:web:09949c9a1143d2da29cd81"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

  export{
      db,
      googleAuthProvider,
      firebase
  }