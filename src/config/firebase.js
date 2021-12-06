import Vue from 'vue'
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";


Vue.use(firestorePlugin)


// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDd-EK_Zp0xxmTSM06a3KFIG0bXj63MLNU",
    authDomain: "fir-demo-a127a.firebaseapp.com",
    projectId: "fir-demo-a127a",
    storageBucket: "fir-demo-a127a.appspot.com",
    messagingSenderId: "466001546342",
    appId: "1:466001546342:web:3bebc900c1c6d4c5c2f1a7"
};


firebase.initializeApp(firebaseConfig);






// export default firebase;

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};


