const express = require('express')
const router = require('./router/studentRouter')
const app = express()
app.use(express.json())
app.use (router)

const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.port

const db = process.env.dblink
mongoose.connect(db).then(()=>{
    console.log('database connection is successful')
})
.catch((err)=>{
    console.log('unable to connect'+err)
})
app.listen(port,()=>{
    console.log('listening on port'+port)
})