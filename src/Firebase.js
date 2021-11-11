import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5wDWAptgZUam9sJpCTl2jxqt4w-vNZJc",
  authDomain: "social-media-90211.firebaseapp.com",
  projectId: "social-media-90211",
  storageBucket: "social-media-90211.appspot.com",
  messagingSenderId: "976911858646",
  appId: "1:976911858646:web:d8f2abebfaa76e3ee78277"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

