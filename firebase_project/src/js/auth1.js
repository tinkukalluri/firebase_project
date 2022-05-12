// Initialize the FirebaseUI Widget using Firebase.
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


const auth = getAuth();
// get the email and password submitted by the user
var email = ""
var password = ""

const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
}


const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}


