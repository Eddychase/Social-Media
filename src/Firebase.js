import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCYN3Lx4J_gAd8wdjUJPF70SXCzocFUHGs",
    authDomain: "linkedin-clone-5577d.firebaseapp.com",
    projectId: "linkedin-clone-5577d",
    storageBucket: "linkedin-clone-5577d.appspot.com",
    messagingSenderId: "122117143176",
    appId: "1:122117143176:web:1ed759cfe4154f72eabd3d",
    measurementId: "G-JMSFJP2KXE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

