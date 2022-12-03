import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDnvjKE4DDJVFBQj-xY4H0c9SRpkaAYwNc",
	authDomain: "react-chat-app-13464.firebaseapp.com",
	projectId: "react-chat-app-13464",
	storageBucket: "react-chat-app-13464.appspot.com",
	messagingSenderId: "183369343367",
	appId: "1:183369343367:web:022dd935009443e377f322",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
