// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA3LygH8eygalLh05aLsJihI5fjzgKCzHk",
    authDomain: "fir-project-96325.firebaseapp.com",
    projectId: "fir-project-96325",
    storageBucket: "fir-project-96325.appspot.com",
    messagingSenderId: "141188316365",
    appId: "1:141188316365:web:df6c0dfeba40cdab6afd84"
};

const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
export const storage = getStorage(firebaseApp);
export const db = getFirestore(firebaseApp);

export default firebaseApp;

