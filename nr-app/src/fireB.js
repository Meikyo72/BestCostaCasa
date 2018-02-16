import firebase from 'firebase'
var config = {
  apiKey: "AIzaSyAVzSIkqK7xfhxGgskRpxl3SPjzmyNg1l4",
  authDomain: "petrichat-f6d40.firebaseapp.com",
  databaseURL: "https://petrichat-f6d40.firebaseio.com",
  storageBucket: "petrichat-f6d40.appspot.com",
  messagingSenderId: "156551107044"
};
var fireB = firebase.initializeApp(config);
export default fireB;
