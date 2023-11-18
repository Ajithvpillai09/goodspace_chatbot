import Session from "../models/session.js";
import mongoose from "mongoose";

export async function createSession(){
     try {
      const session =  await Session.create({})
      return session._id.toString();
     } catch (error) {
        console.log(error);
     }
}

export async function updateSession(id,data){
   try {  
     id = new mongoose.Types.ObjectId(id)
    const session = Session.updateOne(
        {_id:id},
        {
            $push:{session:data}
        }
        )
   } catch (error) {
    console.log(error);
   }
}

export async function getAllSessions(){
    try {
        const sessions = await Session.find()
        return sessions
    } catch (error) {
        console.log(error);
    }
}

export async function getSessionById(id){
    try {
        id = new mongoose.Types.ObjectId(id)
        const session = await Session.findOne({_id:id})
        return session
    } catch (error) {
        console.log(error);
    }
}