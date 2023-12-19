import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpVa0_HswzX2w2fmn0X78Vg6D02JGbny4",
  authDomain: "unspoken-words-r.firebaseapp.com",
  databaseURL: "https://unspoken-words-r-default-rtdb.firebaseio.com",
  projectId: "unspoken-words-r",
  storageBucket: "unspoken-words-r.appspot.com",
  messagingSenderId: "86132178103",
  appId: "1:86132178103:web:54db4f01cfbfe8e7b6a132",
  storageBucket: 'gs://unspoken-words-r.appspot.com'
};


const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);