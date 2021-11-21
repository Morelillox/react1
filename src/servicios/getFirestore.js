


import firebase from "firebase/app"
import 'firebase/firestore'


// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDYICfyBE7fcEyOH89SQF7cS-o3IDEnSeQ",
  authDomain: "mil-budines.firebaseapp.com",
  projectId: "mil-budines",
  storageBucket: "mil-budines.appspot.com",
  messagingSenderId: "23848065839",
  appId: "1:23848065839:web:0b4f3655b6dedce40f5fda"
};
// Initialize Firebase

const app = firebase.initializeApp(firebaseConfig)

export function getFirestore(){    
    return firebase.firestore(app)
}


