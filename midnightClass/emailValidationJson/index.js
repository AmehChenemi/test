const express = require ('express')
const fs = require ('fs')

const port = 4000

const app = express();

// app.use(express.json())

const filePath = ' ./database.json'
app.get('/',async(req,res)=>{
    res.send('WELCOME TO MY API')

})
const writeToFile = async(data)=>{
    try{
await fs.writFileSync(filePath,JSON.stringify(data,null,2))
    }catch(err){
        res.json("something went wrong" + err.message)
    }
}
const readFromFile = async(req,res)=>{
try{
const data =  await fs.readFileSync(filePath,"utf8")

}catch(err){
  console.log(' something went wrong' + err.message)
   
}
}

// using CRUD functionalities
// create a user
app.post('/createLogin',async(req,res)=>{
    const user= req.body;
    const users =req.body;
    const regexEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,5}$/;  
    const regexPassword = /^(?=.[a-z])(?=.[A-Z])(?=.*\d).{8,}$/;
    const database = await readFromFile()
    //  user = database.length + 1;
    //  database.push(user);
     await writeToFile(database)
    if(!regexEmail){
        res.status(404).json({
            message:"This email already exist"
        })
    }else{
        res.status(200).json({
            message: "Login Successfully"
        })
    }
})



app.listen(port,()=>{
    console.log('server is listing on '+ port)
})