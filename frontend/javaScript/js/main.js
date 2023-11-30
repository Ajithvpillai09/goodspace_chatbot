import { io } from "https://cdn.socket.io/4.4.1/socket.io.esm.min.js";

const socket = io('http://localhost:8000')

let sessionID;
let loading;

const chatWindow = document.querySelector(".ChatWindow");

document.getElementById('submit').addEventListener('click', () => {
  if (!loading) {
      messageHandler();
  }
});

document.getElementById('message').addEventListener('keydown', (e) => {
  if (!loading && e.key === "Enter") {
      messageHandler();
  }
});

socket.emit('welcome',{status:"new user"})

socket.on('message',(data)=>{
  loading = false;
  const chatItems = document.querySelectorAll(".ChatItem--loader");
  chatItems.forEach(item => item.remove());
    if(data.status === "session created"){
        sessionID = data.sessionId
    }else{
        displayMessage('res',data.message)
    }
})


function messageHandler(){
    loading = true;
    const message = document.getElementById('message').value
    document.getElementById('message').value = ''
    const userMessage = message.trim();
    if (userMessage !== "") {
      displayMessage("req", userMessage);
    }
    if(loading === true){
      loader()
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

  function loader(){
    const chatItem = document.createElement("div")
    chatItem.classList.add("ChatItem", "ChatItem--loader");
    chatItem.innerHTML = `
    <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    `;
    chatWindow.appendChild(chatItem);
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }


