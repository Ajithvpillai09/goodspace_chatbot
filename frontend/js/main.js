import { io } from "https://cdn.socket.io/4.4.1/socket.io.esm.min.js";

const socket = io('http://localhost:8080')

let sessionID;

const chatWindow = document.querySelector(".ChatWindow");

document.getElementById('submit').addEventListener('click',messageHandler)
document.getElementById('message').addEventListener('keydown',(e)=>{
    if(e.key === "Enter"){
        messageHandler()
    }
})

socket.emit('welcome',{status:"new user"})

socket.on('message',(data)=>{
    console.log(data);
    if(data.status === "session created"){
        sessionID = data.sessionId
    }else{
        displayMessage('expert',data.message)
    }
})



function messageHandler(){
    const message = document.getElementById('message').value
    document.getElementById('message').value = ''
    const userMessage = message.trim();
    if (userMessage !== "") {
      displayMessage("customer", userMessage);
    }
    socket.emit('sendMessage',{sessionId:sessionID,message:message})
}

function displayMessage(sender, message) {
    const chatItem = document.createElement("div");
    chatItem.classList.add("ChatItem", `ChatItem--${sender}`);
    chatItem.innerHTML = `
      <div class="ChatItem-chatContent">
        <div class="ChatItem-chatText">${message}</div>
      </div>
    `;
    chatWindow.appendChild(chatItem);
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }

  function displayLoader() {
    const chatItem = document.createElement("div");
    chatItem.classList.add("ChatItem", `ChatItem--expert`);
    chatItem.innerHTML = `
     <div class="center">
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
    </div>
    `;
    chatWindow.appendChild(chatItem);
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }



