require('dotenv').config()
const bodyParser = require('body-parser')
const express=require("express")
const bodyparser=require("body-parser")
const app=express()

let users=[] //id, name, email, address

app.use(bodyparser.json())



//crud

//get new user Request method:Get
app.get('/users',(req,res)=>{
    res.json(users)
})

//create new user Request method:Post

app.post('/users',(req,res)=>{
    users.push(req.body)
    res.status(201).json(req.body)
})

//get user by id Request method:Get
app.get('/users/:id',(req,res)=>{
    let user=users.find(user=>user.id === parseInt(req.params.id))
    if (!user) res.status(404).send("The user with the given ID was not found.")
    res.json(user)
})

console.log(process.env.DB_Host,"host")
const port =process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})








// app.get('/',(req,res)=>{
//     res.json({
//         message:"Hello world"
//     })
// })
// app.get("/profile",(req,res)=>{
//     res.send("This is my profile")
// })