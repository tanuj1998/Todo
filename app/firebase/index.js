import firebase from 'firebase';

try{
  var config = {
      apiKey: "AIzaSyD9SsPXn8_-fD2G5XdRSFh-7E07QEVfXEI",
      authDomain: "app1-fff8c.firebaseapp.com",
      databaseURL: "https://app1-fff8c.firebaseio.com",
      projectId: "app1-fff8c",
      storageBucket: "app1-fff8c.appspot.com",
      messagingSenderId: "967781198648"
    };
    firebase.initializeApp(config);
}
catch(e){

}


  export var ref = firebase.database().ref();
  export default firebase;
