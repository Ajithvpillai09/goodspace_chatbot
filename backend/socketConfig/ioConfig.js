import { Server, Socket } from 'socket.io';
import { createSession } from '../controllers/dBController.js';
import { getMessages } from '../controllers/openAIController.js';


const socketConfig = (io)=>{
    io.on('connection',(socket)=>{
        console.log("socket connection created")
    
    
    socket.on('welcome',(message)=>{
       createSession().then((id)=>io.emit('message',{status:"session created",sessionId:id}))
    })
  
     
      socket.on('sendMessage',(message)=>{
        console.log(message)
        getMessages(message).then(()=> io.emit('message',{hai:"recieved message"}))
      })

    //   socket.on('disconnect',()=>{
    //     console.log("disconnected");
    //   })
    })
}

export default socketConfig