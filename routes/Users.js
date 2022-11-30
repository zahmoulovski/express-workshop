const express = require('express')
const users =require('../data')
const routeuser = express.Router()
const {v4:uuidv4}=require('uuid')

routeuser.get ('/',(req,res)=>{
    res.send(users)
})

routeuser.post ('/',(req,res)=>{
    const newUser={
        ...req.body,id:uuidv4()
    }
    users.push(newUser)
    res.send(newUser)
})

routeuser.put ('/',(req,res)=>{
    res.send('update de router file')
})

routeuser.delete ('/',(req,res)=>{
    res.send('deleting de router file')
})

module.exports=routeuser