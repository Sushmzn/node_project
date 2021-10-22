require('dotenv').config()
const bodyParser = require('body-parser')
const express=require("express")
const bodyparser=require("body-parser")
const app=express()
const routes=require('./routes/routes')
const logmid=require('./middleware/logger')

let users=[] //id, name, email, address

app.use(bodyparser.json())
app.use((req,res,next)=>{
    console.log("This is middleware!")
    next()
})
app.use('/',routes)
//crud


const port =process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})

