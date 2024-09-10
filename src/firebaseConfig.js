import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC2bgDuBwrsymKinVx4BiuYMS3okewVQ0g",
  authDomain: "vue-3-firebase-6e5b0.firebaseapp.com",
  projectId: "vue-3-firebase-6e5b0",
  storageBucket: "vue-3-firebase-6e5b0.appspot.com",
  messagingSenderId: "317560507482",
  appId: "1:317560507482:web:8cee3af9fa527a7e7b9c63"
};
initializeApp(firebaseConfig);
const auth = getAuth();

export { auth };