import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDBSsV1nhcgrehINKm6ptsPv-v0Qo5ZmAQ",
    authDomain: "progo-d7b30.firebaseapp.com",
    databaseURL: "https://progo-d7b30.firebaseio.com",
    projectId: "progo-d7b30",
    storageBucket: "progo-d7b30.appspot.com",
    messagingSenderId: "1007077473934"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;