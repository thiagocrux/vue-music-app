import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB8ZA7qONmFNRP04AZOa1msVyVmAs3kyw0',
  authDomain: 'music-34163.firebaseapp.com',
  projectId: 'music-34163',
  storageBucket: 'music-34163.appspot.com',
  appId: '1:70276538787:web:a9864485b4051dc1ba7a16',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const usersCollection = db.collection('users');

export { auth, db, usersCollection };
