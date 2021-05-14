import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  appName: 'epg-auth',
  apiKey: 'AIzaSyBFQenLQ98ncWFcZ6Wg-ja1oVRi1WwFjVk',
  authDomain: 'epg-auth.firebaseapp.com',
  databaseURL: 'https://epg-auth.firebaseio.com',
  projectId: 'epg-auth',
  storageBucket: 'epg-auth.appspot.com',
  messagingSenderId: '10543352949',
  appId: '1:10543352949:web:31b8d559546fbc7ebf3c3c',
};

firebase.initializeApp(firebaseConfig);

const signInWithEmail = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};

const signUpWithEmail = (name, email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
};

export { firebase, signInWithEmail, signUpWithEmail };
