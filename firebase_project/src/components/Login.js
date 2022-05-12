import firebase from 'firebase/compat/app';
var firebaseui = require('firebaseui');

const firebaseConfig = {
    apiKey: "AIzaSyA3LygH8eygalLh05aLsJihI5fjzgKCzHk",
    authDomain: "fir-project-96325.firebaseapp.com",
    projectId: "fir-project-96325",
    // this url is for storage
    storageBucket: "fir-project-96325.appspot.com",
    // this is for realtime database
    databaseURL: 'https://fir-project-96325-default-rtdb.firebaseio.com',
    messagingSenderId: "141188316365",
    appId: "1:141188316365:web:df6c0dfeba40cdab6afd84"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

var uiConfig = {
    callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
            // User successfully signed in.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.
            return true;
        },
        uiShown: function () {
            // The widget is rendered.
            // Hide the loader.
            document.getElementById('loader').style.display = 'none';
        }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: '<url-to-redirect-to-on-success>',
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.PhoneAuthProvider.PROVIDER_ID
    ],
    // Terms of service url.
    tosUrl: '<your-tos-url>',
    // Privacy policy url.
    privacyPolicyUrl: '<your-privacy-policy-url>'
};

// make sure u have added a div with #firebaseui-auth-container id
ui.start('#firebaseui-auth-container', uiConfig);