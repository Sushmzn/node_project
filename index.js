const express=require("express")
const app=express()

app.get("/",(request,response) =>{
    response.json({
        message:"Hello World"
    })
});


app.get("/profile",(request,response) =>{
    response.send("This is a Profile page")
});

app.listen(3000)