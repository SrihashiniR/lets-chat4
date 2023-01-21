const firebaseConfig = {
      apiKey: "AIzaSyCf5Ljg-P1MxekWsNPLSvwYWvjEbnLxFSo",
      authDomain: "let-chat-web-app-db3ab.firebaseapp.com",
      databaseURL: "https://let-chat-web-app-db3ab-default-rtdb.firebaseio.com",
      projectId: "let-chat-web-app-db3ab",
      storageBucket: "let-chat-web-app-db3ab.appspot.com",
      messagingSenderId: "239158929529",
      appId: "1:239158929529:web:b279ee6e5f28284c110ca8"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push{(
      name:user_name,
      message:msg,
      like:0
)};
document.getElementById("msg").value="";
}