const studentModel = require ("../model/studentModel")

exports.createUser =async(req,res)=>{
    try{
const newUser = await studentModel.create(req.body)
if(!newUser){
    res.status(400).json("unable to create user")
}else{
    res.status(201).json({
        message:'user'+ newUser.name + "has been successfully created",
        data : newUser
    })
    }

    }catch(err){
        res.status(400).json(err.message)
}
}

exports.getAll = async(req,res)=>{
    try{
        const allUsers = await studentModel.find()
        if(allUsers.length===0){
            res.status(200).json("no user created")
        }else{
            res.status(200).json({
                message : "you have  " +  allUsers.length  + ' existing users,kindly find details below',
                allUsers
            })
        } 

    }catch(err){
        res.status().json(err.message)

    }
}
exports.updateUser = async(req,res)=>{
        try{
            const id = req.params.id
      const {name, age} = req.body
      const updateuser = await studentModel.findByIdAndUpdate(id ,name, age,{new:true})
      res.status(200).json({
       message: 'user updated successully',
       updateuser
      })
       }
       catch(err){
         res.json(err.message)
         }
    

// get one users

exports.getOne = async(req,res)=>{
    try{
        const id = req.params.id
        const oneUser = await studentModel.findById(id).select(["userName","age","name"])
    
            if(!oneUser){
                res.status(400).json({
                message : "user not found",
            })
        }else{
            res.status(200).json({
              message:"kindly find details below",
              oneUser

            })
        }
        

    }catch(err){
        res.status(400).json(err.message)

    }
}




exports.delUser = async(req,res)=>{
    try{
        const id =req.params.id
        const delUser = await studentModel.findByIdAndDelete(id)
        const allUser = await studentModel.find()
        res.json({message:delUser.userName + "has been deleted",delUser,allUser})


    }catch(error){
     res.json(error.message)
    }}
