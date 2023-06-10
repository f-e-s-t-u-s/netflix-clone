const mongoose=require('mongoose')
const signupSchema=mongoose.Schema({

user_name:String,
email:{
    type:String,
    unique:true,
},
password:String


},


)
 const  signup_collection=mongoose.model('LoginDetails',signupSchema)
 module.exports =signup_collection