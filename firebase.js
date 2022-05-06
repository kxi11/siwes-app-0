// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLR8XlGiAJAMIxCEKh144Uso849fUv1uk",
  authDomain: "siwesapp-99c10.firebaseapp.com",
  projectId: "siwesapp-99c10",
  storageBucket: "siwesapp-99c10.appspot.com",
  messagingSenderId: "854600264735",
  appId: "1:854600264735:web:81e96d486daee00e7b392a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }