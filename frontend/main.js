import { io } from "https://cdn.socket.io/4.4.1/socket.io.esm.min.js";

const socket = io('http://localhost:8080')

socket.on('welcome',(message)=>{
    console.log(message)
})

socket.on('message',(message)=>{
    console.log(message);
})

document.getElementById('submit').addEventListener('click',messageHandler)

function messageHandler(){
    const message = document.getElementById('message').value
    socket.emit('sendMessage',{message:message})
}

