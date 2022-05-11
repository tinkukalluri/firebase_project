import { ref, getDownloadURL } from "firebase/storage";
import { getStorage, uploadBytes } from "firebase/storage";
import { storage, db } from "../firebase"
import img from '../car.jpeg'

export async function get_file_from_storage() {
    var url_1 = 'default'
    url_1 = await getDownloadURL(ref(storage, 'colany_gang.png'))
        .then((url) => {
            // `url` is the download URL for 'images/stars.jpg'

            // This can be downloaded directly:
            // const xhr = new XMLHttpRequest();
            // xhr.responseType = 'blob';
            // xhr.onload = (event) => {
            //     const blob = xhr.response;
            // };
            // xhr.open('GET', url);
            // xhr.send();
            // Or inserted into an <img> element
            // console.log(typeof url, url)
            return url;
        })
    // console.log("url_1::", url_1)
    return url_1;
}

export async function upload_file_to_storage() {
    // select BUTTOM
    const btn = document.querySelector('button')
    // ADD CLICK LISTENER TO THE BUTTON WE SELECTED
    btn.addEventListener('click', e => {
        // GET FILE FROM THE  FILE INPUT 
        const file = document.querySelector('input').files[0]
        console.log(file);
        // MAKE A REFERNCE TO FIREBASE .
        const storageRef = ref(storage, `images/${file.name}`)
        const uploadTask = 'default'
        uploadBytes(storageRef, file).then((snapshot) => {
            uploadTask = snapshot
        })
        console.log("uploadTask::", uploadTask)
        function handletasks() {
            uploadTask.pause();

            // Resume the upload
            uploadTask.resume();

            // Cancel the upload
            uploadTask.cancel();
        }

        uploadTask.on('state_changed',
            (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {
                // Handle unsuccessful uploads
                console.log("there has been an error uploading files to storage")
            },
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                });
            }
        );
    })
}