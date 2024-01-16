import  express , { Request, Response } from "express";
  
    import { login, registerUser } from "../controllers/auth";

const Router= express.Router()
Router.post("/register",(req:Request,res:Response)=>{
    res.handle(registerUser,[req.body])
})
Router.post("/login",(req:Request,res:Response)=>{
    res.handle(login,[req.body])
})
export default Router