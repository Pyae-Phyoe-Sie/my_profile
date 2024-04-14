import { initializeApp } from "firebase/app"
import { ENV } from "./constants"

console.log(ENV)

export const firebaseConfig = {
    apiKey:             ENV.NEXT_PUBLIC_API_KEY, // "AIzaSyAT0PbbtKsL8x1PYFjlLZUmqVMaj6yjL30",
    authDomain:         ENV.NEXT_PUBLIC_AUTH_DOMAIN, //"my-profile-e4db1.firebaseapp.com",
    projectId:          ENV.NEXT_PUBLIC_PROJECT_ID, //"my-profile-e4db1",
    storageBucket:      ENV.NEXT_PUBLIC_STORAGE_BUCKET, //"my-profile-e4db1.appspot.com",
    messagingSenderId:  ENV.NEXT_PUBLIC_MESSAGING_SENDER_ID, //"604941730836",
    appId:              ENV.NEXT_PUBLIC_APP_ID, //"1:604941730836:web:665f514a3a571cc6559301",
    measurementId:      ENV.NEXT_PUBLIC_MEAUREMENT_ID, //"G-86TGG2RCCV"
};

const app = initializeApp(firebaseConfig)

export default app;