import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth"; 

const firebaseApp = initializeApp({
    apiKey: "AIzaSyAd17c5b-mt9th3R7kDW0kK_gl5z3G_j9Y",
    authDomain: "calculator-fd654.firebaseapp.com",
    projectId: "calculator-fd654",
    storageBucket: "calculator-fd654.firebasestorage.app",
    messagingSenderId: "598735435863",
    appId: "1:598735435863:web:6d0c13e9eb4423194e8b12",
    measurementId: "G-0NE12BNYX7"
});
const auth= getAuth(firebaseApp);

onAuthStateChanged(auth, user=>{
    if(user !=null){
        console.log('logged in');
    } else{
        console.log('No user');
    }
});