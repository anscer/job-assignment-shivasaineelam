import express ,{Request,Response,Express} from "express";
import dotenv from "dotenv";
dotenv.config();
const app:Express=express();
app.get("/",(req:Request,res:Response)=>{
    res.send("Hello world 2")
})
app.listen(3000,()=>{console.log("server started at port 3000")});