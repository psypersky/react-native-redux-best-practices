import * as firebase from 'firebase';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBJIakNwP5CGxTT-9qWFVRb0KF3H4VV38Y',
  authDomain: 'life-histories.firebaseapp.com',
  databaseURL: 'https://life-histories.firebaseio.com',
  projectId: 'life-histories',
  storageBucket: 'life-histories.appspot.com',
  messagingSenderId: '154687122494',
  appId: '1:154687122494:web:6faf73ee873516cab2756f',
  measurementId: 'G-9L5MYMG0H0',
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
