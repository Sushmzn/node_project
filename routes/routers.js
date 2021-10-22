const express=require('express')
const routers=express.Router()
const controller=require('../controller/book-controller')

books=[]
category=[]

routers.get('/category',controller.getallcategory)
routers.post('/category',controller.storecategory)

routers.get('/books',controller.getallbooks)
routers.post('/books',controller.storebooks)


 routers.get('/category/:id',controller.getbycategory)

module.exports=routers