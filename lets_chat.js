var firebaseConfig = {
  apiKey: "AIzaSyAhGBaoMGoGNGRIf8oAe6R8oGdAUvfgl1U",
  authDomain: "c-93-8f0d6.firebaseapp.com",
  databaseURL: "https://c-93-8f0d6-default-rtdb.firebaseio.com",
  projectId: "c-93-8f0d6",
  storageBucket: "c-93-8f0d6.appspot.com",
  messagingSenderId: "625765915758",
  appId: "1:625765915758:web:1ca5cf444f314449341a7f"
};
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       
      //End code
      });});}
getData();
