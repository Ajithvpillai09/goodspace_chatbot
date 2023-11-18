import mongoose from "mongoose";


const SessionSchema = new mongoose.Schema({
    session:[
        {
             req:{
                 type:String,
             },
             res:{
                 type:String,
             }
        }
     ]
    
},{
    timestamps:true
});



const Session = mongoose.model('Session',SessionSchema);

export default Session;