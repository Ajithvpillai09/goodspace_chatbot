import { io } from "https://cdn.socket.io/4.4.1/socket.io.esm.min.js";

const socket = io('http://localhost:8080')

let sessionID;



socket.emit('welcome',{user:"new user"})

socket.on('message',(data)=>{
    console.log(data);
    if(data.status === "session created"){
        sessionID = data.sessionId
    }
})

document.getElementById('submit').addEventListener('click',messageHandler)


function messageHandler(){
    const message = document.getElementById('message').value
    socket.emit('sendMessage',{sessionId:sessionID,message:message})
}



