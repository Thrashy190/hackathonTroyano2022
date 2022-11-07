import firebase from "./firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAivt1eo738_e4s4tSdrvh8ovBhZcNMmK8",
  authDomain: "hackathon-2022-b997c.firebaseapp.com",
  projectId: "hackathon-2022-b997c",
  storageBucket: "hackathon-2022-b997c.appspot.com",
  messagingSenderId: "217569159200",
  appId: "1:217569159200:web:fded9663e1d4d46423b445",
  measurementId: "G-VQ6H4JJRF5",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const db = firebase.firestore();

export const storage = firebase.storage();

export default firebase;
