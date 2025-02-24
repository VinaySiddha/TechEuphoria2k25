// filepath: /c:/Users/vinay/Downloads/project-bolt-sb1-m3dqxsrz/project/src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAprdRa6-C9GYQl89mwe099CDyJbVGpUWM",
    authDomain: "techeuphoria2k25.firebaseapp.com",
    projectId: "techeuphoria2k25",
    storageBucket: "techeuphoria2k25.firebasestorage.app",
    messagingSenderId: "620795860055",
    appId: "1:620795860055:web:a194b121aa47499eb93f12",
    measurementId: "G-CMW2KF0TC8"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };