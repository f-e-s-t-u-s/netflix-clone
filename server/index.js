import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import bodyParser from "body-parser";
import bcrypt from "bcryptjs"
import { connect } from "./schema/connection.js";
import signupSchema from "./schema/userShema.js";

dotenv.config();

const app =express();


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//eror message


const port =process.env.PORT




app.post("/api/register", async (req, res) => {
  // console.log(req.body.email_address)
  const userExist= await signupSchema.findOne({email:req.body.email})
  if(userExist) return res.json({error:'user already exist'})

  // console.log(value.password);
  const passHashed = await bcrypt.hash(req.body.password, 10);
  const values = {
    email: req.body.email,
    password: passHashed,
  };
  const create_user = await signupSchema.create(values);
  
if(!create_user)return res.json({error:'failed to add user'})

  res.json({
    loged: true,
  });
});

//login route
app.post("/api/login", async (req, res) => {
  const { email_address, password } = req.body;
 
  const user=await signupSchema.findOne({email:email_address})


  if (!user) {
    
    return res.status(400).json({error:'user does not exist',status:400,loged:false})
  }


  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
   
    return res.json({error:'does not exist',status:400,loged:false})
  }
  res.json({status:200,loged:true})
  //succes login
  // res.redirect("/trailers")
});






app.get("*", (req, res) => {
  res.redirect("/");
});



connect()
  .then(
    ()=>{
      app.listen(port, () => {
        console.log("database connected");
        console.log("Server is lisening on http://localhost:"+port);
      })
    }
  )
  .catch((err) => console.log(err));
