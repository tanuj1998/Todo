import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyD9SsPXn8_-fD2G5XdRSFh-7E07QEVfXEI",
    authDomain: "app1-fff8c.firebaseapp.com",
    databaseURL: "https://app1-fff8c.firebaseio.com",
    projectId: "app1-fff8c",
    storageBucket: "app1-fff8c.appspot.com",
    messagingSenderId: "967781198648"
  };
  firebase.initializeApp(config);

  firebase.database().ref().set({
    appName: 'Todo',
    isRunning: true,
    user: {
      name: 'Tanuj',
      age: 20
    }
  });
