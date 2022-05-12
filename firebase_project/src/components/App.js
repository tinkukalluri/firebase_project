import { getStorage, ref, getDownloadURL } from "firebase/storage";
import react, { useEffect, useState } from "react";


import auth1 from "../js/auth1.js";
import { getUserfromFireBase } from '../js/firestore1'
import { get_file_from_storage, upload_file_to_storage } from '../js/storage1'
import '../firebase'
import "../components/Login";
import { writeUserData, readUserData_Listening_for_changes } from '../js/realtime1'

export default function App(props) {

    useEffect(() => {
        getUserfromFireBase()
        run_doc()
        upload_file_to_storage()
        writeUserData("tinkukalluri", "tinku", "tinkukalluri19859@gmail.com", "tikukalluri.github.io")
        readUserData_Listening_for_changes('tinkukalluri')
    }, [])

    function run_doc() {
        let url = get_file_from_storage().then((url) => {
            console.log("urllll", url)
            const img = document.getElementById('myimg');
            img.setAttribute('src', url);
        })

    }



    return <>


    </>
}