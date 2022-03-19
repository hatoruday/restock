import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAl7-4aI6Q3LYqzPAiooEzzz4d2TiHT-iw",
  authDomain: "restock-3446c.firebaseapp.com",
  projectId: "restock-3446c",
  storageBucket: "restock-3446c.appspot.com",
  messagingSenderId: "71547375839",
  appId: "1:71547375839:web:b35e42f43ee948b00b596a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;