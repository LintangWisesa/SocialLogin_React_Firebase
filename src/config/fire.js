import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider, GithubAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "your_firebase_apiKey",
  authDomain: "your_firebase_authDomain",
  projectId: "your_firebase_projectId",
  storageBucket: "your_firebase_storageBucket",
  messagingSenderId: "your_firebase_messagingSenderId",
  appId: "your_firebase_appId"
};

initializeApp(firebaseConfig);
export const auth = getAuth()
export const google = new GoogleAuthProvider()
export const facebook = new FacebookAuthProvider()
export const twitter = new TwitterAuthProvider()
export const github = new GithubAuthProvider()