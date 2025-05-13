import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCyUB07MZSRBki1rxNalcSIi3zGfvp3fDs",
  authDomain: "jnd-project-management.firebaseapp.com",
  projectId: "jnd-project-management",
  storageBucket: "jnd-project-management-c6841.com",
  messagingSenderId: "noreply@jnd-project-management.firebaseapp.com",
  appId: "1:910284350638:web:6e535aa16c412b9c14f93f",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);