import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyB0QyEtnmkDCJGHkXq8ozqyU2DoC4DZnzc",
    authDomain: "email-password-auth-70a2c.firebaseapp.com",
    projectId: "email-password-auth-70a2c",
    storageBucket: "email-password-auth-70a2c.appspot.com",
    messagingSenderId: "780497373292",
    appId: "1:780497373292:web:4d81632b9f2e529472f049"
};

const app = initializeApp(firebaseConfig);

export default app;