import problemRouter from "./problem";
import  express from "express";
import userRouter from "./auth"
import { authMiddleware } from "../middleware/authenticate";

const router= express.Router()
router.use('/problem',authMiddleware,problemRouter)
router.use("/auth",userRouter)

export default router