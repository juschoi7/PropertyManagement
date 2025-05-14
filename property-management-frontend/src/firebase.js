import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBY8ihV5D4KV1x9OPFqSaJrSgCH2rvg3Vo",
  authDomain: "jndpropertymanager.firebaseapp.com",
  projectId: "jndpropertymanager",
  storageBucket: "jndpropertymanager.appspot.com",
  messagingSenderId: "321293540552",
  appId: "1:321293540552:web:83094dc246e2206e6599fd"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
