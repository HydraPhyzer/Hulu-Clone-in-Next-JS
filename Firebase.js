import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAhVF86NWpnvowtPpXmx3VNG8JJEzwVzgo",
  authDomain: "hulu-clone-in-next-js.firebaseapp.com",
  projectId: "hulu-clone-in-next-js",
  storageBucket: "hulu-clone-in-next-js.appspot.com",
  messagingSenderId: "261903761158",
  appId: "1:261903761158:web:bf9652517f0044e9c8e887",
};

const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const db=getFirestore(app);

export {app,auth,db}
