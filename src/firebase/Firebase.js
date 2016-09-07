import * as firebase from 'firebase';

var config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    storageBucket: "",
  };
  
 const firebaseApp  = firebase.initializeApp(config);

export default firebaseApp;
