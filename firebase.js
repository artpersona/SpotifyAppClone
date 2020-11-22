import * as firebase from 'firebase';
import "firebase/firestore";

export const db = firebase.firestore();

const firebaseConfig = {
  apiKey: 'AIzaSyBU8mSHmA5dewQlsw1t6JjTpFvw6k4HdPg',
  authDomain: 'spotify-clone-73aeb.firebaseapp.com',
  databaseURL: 'https://spotify-clone-73aeb.firebaseio.com',
  projectId: 'spotify-clone-73aeb',
  storageBucket: 'spotify-clone-73aeb.appspot.com',
  messagingSenderId: '1048708262772',
  appId: '1:1048708262772:web:4c27bdb6b0afa865069a21',
};

firebase.initializeApp(firebaseConfig);