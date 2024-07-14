// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const fbConfig = {
  apiKey: "AIzaSyBjUARFeqTd_SaVXHKVLGwpebsFAN5HS8Q",
  authDomain: "guinea-pig-react.firebaseapp.com",
  projectId: "guinea-pig-react",
  storageBucket: "guinea-pig-react.appspot.com",
  messagingSenderId: "221567595117",
  appId: "1:221567595117:web:64d236d0ee48d7a910c564",
};

const app = initializeApp(fbConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);

export { app, firestore, auth };
