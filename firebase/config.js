import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD6P5gu78FgNV2TMkWE01M9ufn_7hWG6Xo",
  authDomain: "testboost-9b482.firebaseapp.com",
  projectId: "testboost-9b482",
  storageBucket: "testboost-9b482.appspot.com",
  messagingSenderId: "787695609481",
  appId: "1:787695609481:web:e81cf7341e98732c91c858",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export { firebase };
