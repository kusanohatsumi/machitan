import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCRJxgCikA460N5GsOVn-Q3hjPtBIBlaA4",
  authDomain: "machitan-a7c92.firebaseapp.com",
  projectId: "machitan-a7c92",
  storageBucket: "machitan-a7c92.appspot.com",
  messagingSenderId: "904312490422",
  appId: "1:904312490422:web:443f3f1324651418f29917"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {db, auth, provider}