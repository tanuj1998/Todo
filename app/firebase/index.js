import firebase from 'firebase';

try{
  var config = {
      apiKey: "AIzaSyC6hTa0p7F1yOoujW_R7-w13vkE_QABk1Y",
      authDomain: "finalapp-f6c61.firebaseapp.com",
      databaseURL: "https://finalapp-f6c61.firebaseio.com",
      storageBucket: "finalapp-f6c61.appspot.com",
      projectId: "finalapp-f6c61",
      messagingSenderId: "54214171726"
    };
    firebase.initializeApp(config);
}
catch(e){

}
  export var githubCheck = new firebase.auth.GithubAuthProvider();

  export var ref = firebase.database().ref();
  export default firebase;
