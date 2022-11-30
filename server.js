const express = require('express')
const app = express()
const port = 2804

// app.get('/',(req,res)=>{
//     res.send('msg for the get http request')
// })

// app.post('/post',(req,res)=>{
//     res.send('add user http request')
// })

// app.put('/put',(req,res)=>{
//     res.send('update user http request')
// })

// app.delete('/delete',(req,res)=>{
//     res.send('delete user http request')
// })


const routeuser = require('./routes/Users')

app.use('/user',routeuser)











app.listen(port,err=>{
    err ? console.log(err):console.log(`You are connected to the port ${port}`)
})
