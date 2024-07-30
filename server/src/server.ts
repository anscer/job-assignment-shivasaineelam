import express ,{Request,Response,Express} from "express";
import userRoutes from "./../routes/userRoutes";
import dotenv from "dotenv";
import bodyParser,{ json } from "body-parser";
import connectDB from "./../models/index"
dotenv.config();

const app:Express=express();
connectDB();
app.use(json())
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/",(req:Request,res:Response)=>{
    res.send("Hello world ")
})

app.use("/user",userRoutes)
app.listen(process.env.PORT,()=>{console.log(`server started at port ${process.env.PORT}`)});