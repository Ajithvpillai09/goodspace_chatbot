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

export async function updateSession(data){
   try {  
    let {id,req,res} = data
    id = new mongoose.Types.ObjectId(id)
    await Session.updateOne(
        { _id: id },
        {
            $push: {
                session: {
                    req: req,
                    res: res
                }
            }
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