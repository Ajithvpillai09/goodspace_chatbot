import mongoose from "mongoose";


const SessionSchema = new mongoose.Schema({
    
    
},{
    timestamps:true
});



const Session = mongoose.model('Session',SessionSchema);

export default Session;