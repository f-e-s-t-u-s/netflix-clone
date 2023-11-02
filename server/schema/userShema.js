import mongoose from "mongoose"
const signupSchema=mongoose.Schema({

user_name:String,
email:{
    type:String,
    unique:true,
},
password:String


},
{
    collection:'users'
}


)
  export const  signup_collection=mongoose.model('users',signupSchema)
 