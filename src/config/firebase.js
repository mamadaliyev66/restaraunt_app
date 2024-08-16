import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app';
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";





const firebaseConfig = {
    apiKey: "AIzaSyD7UYF-QR-SgVrWAS-iWVE3sgn-q7GdBjM",
    authDomain: "restarauntapp-44e54.firebaseapp.com",
    projectId: "restarauntapp-44e54",
    storageBucket: "restarauntapp-44e54.appspot.com",
    messagingSenderId: "584962063828",
    appId: "1:584962063828:web:9b91024a5f4c70e9f8aa41",
    measurementId: "G-XNEQ0VRM9P"
  };






const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const storage = getStorage(app);

const app2=firebase.initializeApp(firebaseConfig)
const firestore = app2.firestore();

const auth = getAuth(app)

export { auth, storage,firestore, firebase ,app,db};