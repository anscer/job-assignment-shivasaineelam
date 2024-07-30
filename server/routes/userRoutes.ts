import {Router,Request,Response,NextFunction} from "express"
import User from "./../models/user"
const router=Router();
router.post("/",async(req:Request,res:Response)=>{
   try {
    const {username,password}=req.body;
    const newUser=new User({username,password});
    await newUser.save();
    res.status(201).json(newUser);
    
   } catch (error) {
    res.status(401).send(error)
   }
    

})
export default router;
