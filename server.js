const { log } = require("console")
const express = require("express")
const path = require("path")
const app = express()
const userData = []
const bcrypt = require("bcrypt")
const {mongoClient} = require("mongodb")

app.use(express.static("client"))
app.set("view engine", "ejs")
app.use(express.urlencoded({extended: false}))

//mongo connection



app.post("/register", async(req,res) =>{
    try{
        const passHashed = await bcrypt.hash(req.body.password, 10)
        userData.push({
            id: Date.now().toString(),
            email: req.body.email_address,
            password: passHashed,
        })
        console.log(userData)

        res.redirect("/login")
    } catch (e) {
        console.log(e)
        res.redirect("/register")
    }
})

//create routes for login and register
app.get('/', (req,res)=> {
    res.render("index")
})

app.get('/login', (req,res)=>{
    res.render("login")
}) 

app.get('/register',(req,res)=>{
    res.render("register")
})
app.get("*", (req, res) =>{
    res.redirect('/')
})

app.listen(8000, () =>{
    console.log("Server is lisening on http:localhost:8000")
})