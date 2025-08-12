import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA0mydQIzph0-77mZU2GWzwx9aYzu0BQTc",
  authDomain: "newscraft-4197d.firebaseapp.com",
  projectId: "newscraft-4197d",
  storageBucket: "newscraft-4197d.firebasestorage.app",
  messagingSenderId: "1096383551698",
  appId: "1:1096383551698:web:840ebeff509d5e6674b50b",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
