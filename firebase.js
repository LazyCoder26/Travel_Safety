// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDHcp36GO-Y98U_e7IJKZxZyU36Lqi1BEU",
    authDomain: "secret-d8280.firebaseapp.com",
    projectId: "secret-d8280",
    storageBucket: "secret-d8280.appspot.com",
    messagingSenderId: "43365483109",
    appId: "1:43365483109:web:ee8f40cb41c687816bbc8c",
    measurementId: "G-Z86DGBBG5K"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };