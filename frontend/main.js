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
// document.getElementById('submit').addEventListener('click',api)


function messageHandler(){
    const message = document.getElementById('message').value
    socket.emit('sendMessage',{sessionId:sessionID,message:message})
}

// const API ="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"
// async function api(){
//     try {
//         const options = {
//             method:'POST',
//             headers:{
//                 'Authorization':`Bearer ${API}`,
//                 'Content-Type':'application/json'
//             },
//             body:JSON.stringify({
//                 model:"gpt-3.5-turbo",
//                 messages:[{role:"user",content:"Hello"}],
//                 max_tokens:100
//             })
//         }
//         const res = await fetch('https://api.openai.com/v1/chat/completions',options)
//         const data = res.json()
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

