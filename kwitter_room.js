
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
document.getElementById("user_name").innerHTML="Hello "+user_name+" ! ";
    
    function addUser()
    {
        user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
    }
    function addRoom()
{
      room_name=document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
           purpose: "adding room name"
      });

      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name-"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output"),innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="chat_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}