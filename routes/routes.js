const express=require('express')
const router=express.Router()

router.get('/users',(req,res)=>{
    res.json(users)
})

//create new user Request method:Post

router.post('/users',(req,res)=>{
    users.push(req.body)
    res.status(201).json(req.body)
})

//get user by id Request method:Get
router.get('/users/:id',(req,res)=>{
    let user=users.find((user)=>user.id === parseInt(req.params.id))
    if (!user) {
        return res.status(404).json({
            error:"ERROR!! ERROR!! ERROR!!\nThe user with the given ID was not found."
        })
    }
    res.json(user)
})

router.put('/users/:id',(req,res) =>{
    let userIndex=users.findIndex((user)=>user.id === parseInt(req.params.id))
    if (userIndex===-1) {
        return res.status(404).json({
            error:"ERROR!! ERROR!! ERROR!! The user with the given ID was not found."
        })
    }
    users[userIndex]['name']=req.body.name
    users[userIndex]['email']=req.body.email
    users[userIndex]['address']=req.body.address

        res.json({
        index:userIndex,
    })
})


module.exports = router