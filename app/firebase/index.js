import firebase from 'firebase';

try{
  var config = {
      apiKey: "",
      authDomain: "",
      databaseURL: "",
      storageBucket: "",
      projectId: "",
      messagingSenderId: ""
    };
    firebase.initializeApp(config);
}
catch(e){
}
  export var githubCheck = new firebase.auth.GithubAuthProvider();

  export var ref = firebase.database().ref();
  export default firebase;
