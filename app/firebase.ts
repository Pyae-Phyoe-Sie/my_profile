import { initializeApp } from "firebase/app";

export const firebaseConfig = {
    apiKey: "AIzaSyAT0PbbtKsL8x1PYFjlLZUmqVMaj6yjL30",
    authDomain: "my-profile-e4db1.firebaseapp.com",
    projectId: "my-profile-e4db1",
    storageBucket: "my-profile-e4db1.appspot.com",
    messagingSenderId: "604941730836",
    appId: "1:604941730836:web:665f514a3a571cc6559301",
    measurementId: "G-86TGG2RCCV"
};

const app = initializeApp(firebaseConfig)

export default app;