import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDhlsB_ZUZvilYovMs5c4bLCgwj6M6xUwE",
    authDomain: "react-router-auth.firebaseapp.com",
    databaseURL: "https://react-router-auth.firebaseio.com",
    storageBucket: "react-router-auth.appspot.com",
  };
  
 const firebaseApp  = firebase.initializeApp(config);

export default firebaseApp;
