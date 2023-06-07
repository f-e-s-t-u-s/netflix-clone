const { log } = require("console")
const express = require("express")
const fetch = require("node-fetch")
const path = require("path")
const app = express()

const bcrypt = require("bcrypt")
const {MongoClient} = require("mongodb")

app.use(express.static("client"))
app.set("view engine", "ejs")
app.use(express.urlencoded({extended: false}))


//eror message


//mongo connection
const connString = "mongodb://127.0.0.1:27017"
const client = new MongoClient(connString, { useNewUrlParser: true, useUnifiedTopology: true})
async function connectMongodb() {
    try {
        await client.connect();
        console.log("Connected to mongodb");
    } catch (error) {
        console.error("Failed to connect:", error);
    }
}
connectMongodb();

//register route

app.post("/register", async(req,res) =>{
    try{
        const passHashed = await bcrypt.hash(req.body.password, 10)
        const userData = {
            id: Date.now().toString(),
            email: req.body.email_address,
            password: passHashed,
        };
        // console.log(userData)
        const collection = client.db("netflix-users").collection("users")
        await collection.insertOne(userData);
        console.log("DAta written to database succesfully");
        
        res.redirect("/login")
    } catch (e) {
        console.log(e)
        res.redirect("/register")
    }
})

//login route
app.post("/login", async(req,res) => {
    try {
        const {email_address, password} = req.body
        const collection = client.db("netflix-users").collection("users")
        const user = await collection.findOne({email: email_address})

        if(!user){
            console.log("No such email");
            
            // res.redirect("/login")
            return;
        }

        const validPassword = await bcrypt.compare(password, user.password)
        if(!validPassword){
            console.log("Wrong passowrd");
            res.redirect("/login")
            return;
        }
        //succes login
        res.redirect("/homepage")
    } catch (e) {
        console.log(e);
        res.redirect("/login")
    }
})

//get pages
app.get('/', (req,res)=> {
    res.render("index")
})

app.get('/login', (req,res)=>{
    res.render("login")
}) 

app.get('/register',(req,res)=>{
    res.render("register")
})
app.get('/homepage', (req,res) =>{
    res.render("homepage")
})
app.get("*", (req, res) =>{
    res.redirect('/')
})

//moviedb fetch data



const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjBiNzAwYTBkYWFjZjc4ZmQ1MDliYmM4M2ZlN2M1ZSIsInN1YiI6IjY0Nzk5Y2NjMTc0OTczMDBjMTMxOTRhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NFDwHkJtyQTv3OXF7KXXP7ruByZf6__4Fbrp3-VATDQ'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));

app.listen(8000, () =>{
    console.log("Server is lisening on http:localhost:8000")
})