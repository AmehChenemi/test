const express = require('express')
const router = express.Router() 
const {createUser,updateUser,delUser,getAll,getOne} = require("../controller/studentcontroller")
//router.get('/',home),

router.post('/createstudent',createUser),

router.put('/updatestudent/:id',updateUser),

router.delete('/deletestudent/:id',delUser),

router.get('/getall',getAll),

router.get('/getone',getOne)

module.exports= router
