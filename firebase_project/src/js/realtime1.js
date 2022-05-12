import { database } from "../firebase"
import { getDatabase, ref, set, onValue, get } from "firebase/database";

export function writeUserData(userId, name, email, imageUrl) {
    const db = getDatabase();
    set(ref(db, 'users/' + userId), {
        username: name,
        email: email,
        profile_picture: imageUrl
    }).then(() => {
        console.log("done::")
    })
}


export function readUserData_Listening_for_changes(userId) {
    const db = getDatabase();
    const userRef = ref(db, 'users/' + userId);
    // here onValue callback is called everytime there is a change in the value in realtime
    // database
    // Important: onValue() is called every time data is changed at the specified database
    // reference, including changes to children.To limit the size of your snapshots,
    //  attach only at the lowest level needed for watching changes.
    // For example, attaching a listener to the root of your database is not recommended.
    onValue(userRef, (snapshot) => {
        if (snapshot.exists()) {
            const data = snapshot.val();
            console.log(data);
        } else {
            console.log("something went wrong")
        }
    });
}


export function readUserDataUsingGet(userId) {
    const db = getDatabase();
    const userRef = ref(db, 'users/' + userId);
    get(userRef).then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val());
        } else {
            console.log("something went wrong in readUserDataOnce")
        }
    }).catch((err) => {
        console.error(err);
    })
}



// In some cases you may want the value from the local cache to be returned immediately,
//     instead of checking for an updated value on the server.
// In those cases you can use once() to get the data from the local disk cache immediately.
export function readUserDataOnceFromCache(userId) {
    const db = getDatabase();
    return onValue(ref(db, '/users/' + userId), (snapshot) => {
        const username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
        // ...
    }, {
        onlyOnce: true
    });
}