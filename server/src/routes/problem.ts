// src/routes/marvelRoutes.ts
import express, { Request, Response } from 'express';
import { getProblem, wrongAnswer } from '../controllers/problem';
import { profile } from '../controllers/auth';
interface CustomRequest extends Request {
   user?: string;
   userId?: string;
 }

const problemRouter = express.Router();
problemRouter.get('/:type/:num/:digit/:correct',(req:CustomRequest,res:Response)=>{
    
   res.handle(getProblem,[req.params,req.userId])
})
problemRouter.post("/wrong",(req:CustomRequest,res:Response)=>{
   res.handle(wrongAnswer,[req.body,req.userId])
})
problemRouter.get('/profile',(req:CustomRequest,res:Response)=>{
   res.handle(profile,[req.userId])
})

export default problemRouter;
