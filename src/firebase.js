import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDuCgABaZKTOn2yO9-edJGbWwhVYP1mG_A',
  authDomain: 'fb-messanger-clone-7f4c3.firebaseapp.com',
  databaseURL: 'https://fb-messanger-clone-7f4c3.firebaseio.com',
  projectId: 'fb-messanger-clone-7f4c3',
  storageBucket: 'fb-messanger-clone-7f4c3.appspot.com',
  messagingSenderId: '184679770072',
  appId: '1:184679770072:web:54925716877d514619f4ad',
  measurementId: 'G-32YCN309H4',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore(); //data base

export default db;
