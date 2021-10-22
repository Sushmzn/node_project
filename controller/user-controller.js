
let users=[]
const getallusers =(req,res)=>{
    res.json(users)
}
const store=(req,res)=>{
    users.push(req.body)
    res.status(201).json(req.body)
}

const getbyid=(req,res)=>{
    let user=users.find((user)=>user.id === parseInt(req.params.id))
    if (!user) {
        return res.status(404).json({
            error:"ERROR!! ERROR!! ERROR!!\nThe user with the given ID was not found."
        })
    }
    res.json(user)
}