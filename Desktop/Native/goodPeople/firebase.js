/*import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';*/

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC__mqAjPr9KFYgLsIo1b-m5kodoazGThg",
  authDomain: "good-thing-60935.firebaseapp.com",
  databaseURL: "https://good-thing-60935-default-rtdb.firebaseio.com",
  projectId: "good-thing-60935",
  storageBucket: "good-thing-60935.appspot.com",
  messagingSenderId: "1012684852797",
  appId: "1:1012684852797:web:43702293cb71be28502454"
};

  let app;

  if(firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
  } else {
    app = firebase.app();
  }

  const db = app.firestore();
  const auth = firebase.auth();
  

  export { db, auth };
  
  /*const firebaseConfig = {
    apiKey: 'api-key',
    authDomain: 'project-id.firebaseapp.com',
    databaseURL: 'https://project-id.firebaseio.com',
    projectId: 'project-id',
    storageBucket: 'project-id.appspot.com',
    messagingSenderId: 'sender-id',
    appId: 'app-id',
    measurementId: 'G-measurement-id',
  };
  
  initializeApp(firebaseConfig); 
  */