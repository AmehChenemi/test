// const express = require('express')

// const port = 3000

// const app = express()

// const mongoose = require('mongoose')

// app.use(express.json())


// // create users
// app.get('/',(req,res)=>{
//     res.send("<h1>Welcome to my website</h1><p>This is a simple website using nodejs nd mongoose</p>")
// })



// // get one user by username
// = async(req,res)=>{
//     try{
//         const userName= req.params.username
//     // console.log(username)
//     const studentUser = await studentModel.findOne({userName}).select(["name","userName"])
// if(!studentUser){
//      res.status(400).json("unable to find user")
     
// }else{
// res.status(200).json({
//     message:"user data found",
//     studentUser
// })
// }
// }catch(err){
//     res.status(400).json(err.message)
// }
// })


// app.put('/updateuser/:id',

// app.get('/student/:username',)

// app.delete('/deleteuser/:id',)


// mongoose.connect().then(()=>{
//     console.log('database connection is successful')
// }).catch((err)=>{
//     console.log('unable to connect'+err)
// })




// app.listen(port,()=>{
//     console.log('server is listening on ' + port)
// })