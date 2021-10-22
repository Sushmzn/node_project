const logreq=(req,res,next)=>{
    console.log(
        `${req.method} ${req.protocol}://${req.get("Host")}${req.origin}`

    )
    next()
}

module.exports=logreq