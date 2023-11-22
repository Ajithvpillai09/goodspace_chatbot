import express from "express"
import asyncHandler from "express-async-handler";
import { getAllSessions,getSessionById } from "../controllers/dBController.js";


const router = express.Router();

router.get('/history',asyncHandler(async (req,res)=>{
  
      const data = await getAllSessions()
      if(data){
        res.status(200).json({data})
      }
      else{
        res.status(400)
        throw new Error("error in fetching all sessions")  
      }
 })
)

router.get('/session/:id',asyncHandler(async(req,res)=>{
   
        const id = req.params.id; 
        const data = await getSessionById(id)
        if(data){
            res.status(200).json(data)
        }else{
            res.status(400)
            throw new Error("error in fetching  session by id")  
        }   
     })
)

export default router;
