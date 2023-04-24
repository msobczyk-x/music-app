// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUOHRff0yOpwwic25ieqklzFJznTjF2LE",
  authDomain: "music-player-app-d2395.firebaseapp.com",
  projectId: "music-player-app-d2395",
  storageBucket: "music-player-app-d2395.appspot.com",
  messagingSenderId: "482619130736",
  appId: "1:482619130736:web:f05f0fd34390d50edc45b5"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
