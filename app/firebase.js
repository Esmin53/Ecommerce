import { getStorage } from "firebase/storage"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB_N-GZfmxhAEnvRci5MPn57wle6-V24D0",
  authDomain: "ecommerce-fc8dd.firebaseapp.com",
  projectId: "ecommerce-fc8dd",
  storageBucket: "ecommerce-fc8dd.appspot.com",
  messagingSenderId: "342970306264",
  appId: "1:342970306264:web:475858d6b76a2afcc651ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);