// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
	apiKey: "AIzaSyCSTvcrR4EnwfB9LcLr57um9faiBbD9PyA",
	authDomain: "task-management-mern.firebaseapp.com",
	projectId: "task-management-mern",
	storageBucket: "task-management-mern.firebasestorage.app",
	messagingSenderId: "871921629575",
	appId: "1:871921629575:web:7ac42ff28d7ba4f3d07b22",
	measurementId: "G-YPRQ42M3ML",
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
