import { Server, Socket } from 'socket.io';
import { createSession, updateSession } from '../controllers/dBController.js';
import { getMessages } from '../controllers/openAIController.js';


const socketConfig = (io)=>{
    io.on('connection',(socket)=>{
        console.log("socket connection created")
    
    
    socket.on('welcome',(message)=>{
       createSession().then((id)=>io.emit('message',{status:"session created",sessionId:id}))
    })
  
     
      socket.on('sendMessage',async (message)=>{
        const answer =  await getMessages(message.message)
        await updateSession({id:message.sessionId,req:message.message,res:answer})
        io.emit('message',answer)
      })

    //   socket.on('disconnect',()=>{
    //     console.log("disconnected");
    //   })
    })
}

export default socketConfig