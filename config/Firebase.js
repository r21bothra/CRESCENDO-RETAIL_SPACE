import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0tUtWw1YqN8L1xsnauohV3RXtqKVjv1U",
  authDomain: "retail-space-3de71.firebaseapp.com",
  projectId: "retail-space-3de71",
  storageBucket: "retail-space-3de71.appspot.com",
  messagingSenderId: "997616003453",
  appId: "1:997616003453:web:10b148897f31d7f0e84414",
  databaseURL: "gs://retail-space-3de71.appspot.com",
};

//measurementId

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const db = app.firestore();
export const storage = getStorage(app);

export const logout1 = () => {
  auth.signOut();
};
