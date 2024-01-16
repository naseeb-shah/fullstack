import  express  from "express";
import enhancedExpress  from '@cloudedots/enhanced-express'
import { connectToDatabase } from "./helpers/db";
import router from "./routes";
import cors from "cors";
const app= express()
app.use(cors())



app.use(express.json())
app.use(enhancedExpress({
    logger: console // You can pass other loggers which have log, error, debug functions like 'log4js'
})); 
app.use("/math",router)
app.get("/",(req,res)=>{
    res.send({
        data:"Math"
    })
})
connectToDatabase()
app.listen(3000, () => {
   
      console.log("Server is started at 3000");
    
  });
  