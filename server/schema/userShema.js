import mongoose,{Schema} from "mongoose"


const signupSchema=new Schema({

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
   const  signup_collection=mongoose.model('users',signupSchema)
   export default signupSchema;
 