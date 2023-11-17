import { Server, Socket } from 'socket.io';
import { getMessages } from '../openAiConfig/getMessages.js';


const socketConfig = (io)=>{
    io.on('connection',(socket)=>{
        console.log("socket connection created")
    
    
     io.emit('welcome',{hallo:"hallo thiiss i"})
  
     
      socket.on('sendMessage',(message)=>{
        console.log(message)
        io.emit('message',{hai:"recieved message"})
        // getMessages(message).then(()=> io.emit('message',{hai:"recieved message"}))
        
      })

    //   socket.on('disconnect',()=>{
    //     console.log("disconnected");
    //   })
    })
}

export default socketConfig