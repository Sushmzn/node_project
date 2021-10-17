require('dotenv').config()
const bodyParser = require('body-parser')
const express=require("express")
const bodyparser=require("body-parser")
const app=express()

let category=[] //id, title, createdDate
let books=[]//id, title, description, categoryid, author, createdDate

app.use(bodyparser.json())

app.get('/category',(request,response)=>{
    response.json(category)
})
app.post('/category',(request,response)=>{
    category.push(request.body)
    response.status(201).json(request.body)
})


app.get('/books',(request,response)=>{
    response.json(books)
})
app.post('/books',(request,response)=>{
    books.push(request.body)
    response.status(201).json(request.body)
})


 app.get('/category/:id',(request,response)=>{
     let catid=category.find(catid=>catid.id === parseInt(request.params.id))
     if (!catid) {
        return response.status(404).json({
            error:"ERROR!! ERROR!! ERROR!!  The category with the given ID was not found."
        })
        }
    
        response.json(catid)
 })

const port =process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})