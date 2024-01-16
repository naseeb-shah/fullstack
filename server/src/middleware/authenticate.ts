 import { error } from "console";
import { Request,Response,NextFunction } from "express";
 import { decode,verify } from "jsonwebtoken";
 interface CustomRequest extends Request {
    user?: string;
    userId?: string;
  }

 export const authMiddleware=(req:CustomRequest,res:Response,next:NextFunction)=>{

    try {
        const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
        if(!token){
            throw 404
        }
         const decoded:any= verify(token,"micro2025")
         
         req.userId = decoded.id;
         console.log(req.userId)
 next()
    }catch(e){
        throw e
    }

 }