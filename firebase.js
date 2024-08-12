// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCetRguatOfP-9VVVL_2Tc2oFdKuBqcDLg",
  authDomain: "inventory-management-e66fd.firebaseapp.com",
  projectId: "inventory-management-e66fd",
  storageBucket: "inventory-management-e66fd.appspot.com",
  messagingSenderId: "994554069637",
  appId: "1:994554069637:web:63e731be312e0fbc769fec",
  measurementId: "G-KX5RG77MMT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export { firestore };
