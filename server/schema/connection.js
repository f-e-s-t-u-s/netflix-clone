import mongoose from "mongoose";

import dotenv from "dotenv"

dotenv.config()





const uri=process.env.MONGO;



export const connect=async()=>{

  console.log(uri)
const result= await  mongoose.connect(uri)

return result;


}

