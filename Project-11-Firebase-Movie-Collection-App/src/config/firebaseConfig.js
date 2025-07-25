import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDImgxrL_fXYVuPVpC985JQm-0QH_-w44c",
  authDomain: "fir-movie-collection-app.firebaseapp.com",
  projectId: "fir-movie-collection-app",
  storageBucket: "fir-movie-collection-app.firebasestorage.app",
  messagingSenderId: "44648950667",
  appId: "1:44648950667:web:596ec1148b5c59f6efdd8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);