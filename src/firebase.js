import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB0z-fmnpaj5dgInIejWpFWY947Ikk-lLQ",
  authDomain: "fir-react-a147f.firebaseapp.com",
  projectId: "fir-react-a147f",
  storageBucket: "fir-react-a147f.appspot.com",
  messagingSenderId: "217092731850",
  appId: "1:217092731850:web:06f3e12db45192ba5d9533"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;