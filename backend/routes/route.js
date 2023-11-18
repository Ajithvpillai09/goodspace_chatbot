import express from "express"
import { getAllSessions,getSessionById } from "../controllers/dBController.js";


const router = express.Router();

router.get('/history',async (req,res)=>{
   try {
      const data = await getAllSessions()
      res.status(200).json({data})
   } catch (error) {
    res.status(400).json({message:"error in fetching by all sessions"})
   }
})

router.get('/session/:id',async(req,res)=>{
    try {
        const id = req.params.id; 
        const data = await getSessionById(id)
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json({message:"error in fetching by id"})
    }
})

export default router;
