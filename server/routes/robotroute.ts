import {Router,Request,Response} from "express"
import Robot from "./../models/robotState"
const router=Router();
router.get("/",async(req:Request,res:Response)=>{
    try{
        const data=await Robot.find();
        res.send(data);
    }catch{
        res.send("error occured")
    }
})
export default router;