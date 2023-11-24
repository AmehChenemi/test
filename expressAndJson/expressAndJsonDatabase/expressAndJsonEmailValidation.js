const express = require ("express")

const port = 4040

const app = express();

app.use(express.json());

const filePath = './database'

async function writeToFile(data){
    try{
 await fs.writeFileSync(filePath,JSON.stringify(data),null,2)

    }catch(err){
console.log("err:unable to write to file")
    }

}
async function readFromFile(){
    try{
await fs.readFileSync(filePath,"utf8")
    }catch{
        console.log('err:something went wrong')
    }
}

// using CRUD functionality
app.post('/students',async(req,res)=>{

const nStudents = req.body
await writeToFile(students);
res.status(200).json({
  data:students
})



})

app.listen(port,()=>{
    console.log("server is listening on "+ port)
});