// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPzdrtdZ6CdQjIWBfZA6zcBxdqmTrJMG8",
  authDomain: "chef-recipe-hunter-3c32e.firebaseapp.com",
  projectId: "chef-recipe-hunter-3c32e",
  storageBucket: "chef-recipe-hunter-3c32e.appspot.com",
  messagingSenderId: "372728749273",
  appId: "1:372728749273:web:c1ba62481ee3d2a109b2c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;