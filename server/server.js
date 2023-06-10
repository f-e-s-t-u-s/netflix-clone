const { log } = require("console");
const express = require("express");
const fetch = require("node-fetch");
const path = require("path");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");

const mongoose = require("mongoose");
const userschema = require("./schema/userShema");
dotenv.config();
app.use(express.static(path.join(__dirname, "client/src")));
app.set("view engine", "ejs");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//eror message

//mongo connection
const connString =  process.env.MONGO;
const port =process.env.PORT

const connection = async () => {
  const connect = await mongoose.connect(connString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  return connect;
};


app.post("/api/register", async (req, res) => {
  // console.log(req.body.email_address)

  // console.log(value.password);
  const passHashed = await bcrypt.hash(req.body.password, 10);
  const values = {
    email: req.body.email_address,
    password: passHashed,
  };
  const create_user = await userschema.create(values);
  

  res.json({
    loged: true,
  });
});

//login route
app.post("/api/login", async (req, res) => {
  const { email_address, password } = req.body;
  const user=await userschema.findOne({email:email_address})


  if (!user) {
    
    return res.json({error:'user does not exist',status:400,loged:false})
  }


  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
   
    return res.json({error:'user does not exist',status:400,loged:false})
  }
  res.json({status:200,loged:true})
  //succes login
  // res.redirect("/trailers")
});


//Export api key to client

//get pages
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/register", (req, res) => {
  res.render("register");
});
app.get("/homepage", (req, res) => {
  res.render("homepage");
});
app.get("*", (req, res) => {
  res.redirect("/");
});

//moviedb fetch data

// const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjBiNzAwYTBkYWFjZjc4ZmQ1MDliYmM4M2ZlN2M1ZSIsInN1YiI6IjY0Nzk5Y2NjMTc0OTczMDBjMTMxOTRhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NFDwHkJtyQTv3OXF7KXXP7ruByZf6__4Fbrp3-VATDQ'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error('error:' + err));

connection()
  .then(
    app.listen(port, () => {
      console.log("database connected");
      console.log("Server is lisening on http://localhost:8000");
    })
  )
  .catch((err) => console.log(err));
