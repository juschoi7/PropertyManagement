import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCyUB07MZSRBki1rxNalcSIi3zGfvp3fDs",
  authDomain: "jnd-project-management.firebaseapp.com",
  projectId: "jnd-project-management",
  storageBucket: "jnd-project-management.appspot.com",
  messagingSenderId: "910284350638",
  appId: "1:910284350638:web:4e0471cb0603e2dd14f93f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
