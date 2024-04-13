import { initializeApp } from "firebase/app";

export const firebaseConfig = {
    apiKey: "AIzaSyB_VGMsWK4lC3kk7PEsEspR1-KfMueIDMw",
    authDomain: "pyaemoenyi-1df5d.firebaseapp.com",
    projectId: "pyaemoenyi-1df5d",
    storageBucket: "pyaemoenyi-1df5d.appspot.com",
    messagingSenderId: "144098651909",
    appId: "1:144098651909:web:2f69204976d59da37ad16c",
    measurementId: "G-W1TBZKVXCZ"
};

const app = initializeApp(firebaseConfig)

export default app;