import { getFirestore, collection, getDocs, setDoc, doc, addDoc } from 'firebase/firestore';
import { updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { query, where } from "firebase/firestore";
import { storage, db } from "../firebase"



const addUserToFireBase = async () => {
    try {
        const usersCollection = collection(db, 'users')
        const tinkuRef = doc(db, "users", "tinku");
        console.log("tinku ref::", tinkuRef);
    } catch (err) {
        console.log(err)
        setTimeout(() => {
            console.log('something went wrong in adding ')
        }, 3000)
    }
};

export const getUserfromFireBase = async () => {
    try {
        console.log("entered getUserfromFireBase")
        const q = query(collection(db, "users"), where("name", "==", "tinku kalluri"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    }
    catch (err) {
        console.log(err)
    }
};

export default addUserToFireBase