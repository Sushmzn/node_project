require('dotenv').config()
const bodyParser = require('body-parser')
const express=require("express")
const bodyparser=require("body-parser")
const routers=require('./routes/routers')
const app=express()

let category=[] //id, title, createdDate
let books=[]//id, title, description, categoryid, author, createdDate

app.use(bodyparser.json())
app.use('/',routers)


const port =process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})
