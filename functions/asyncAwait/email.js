const email ="Nwejeebuka@gmail.com";
let myEmail = prompt ("enter an email");
if(myEmail!==email){
    alert("invalid email")
      
}else{
    alert("valid email")
}



// const http = require ('http');
// const host = "localhost"
// const port = "2023"
// const fs = require('fs')
// const server = http.createServer((req,res)=>{
//     res. writeHead(200,{"Content-Type" :"text/plain"});
//     const myReadStream =fs.createReadStream("./testFile.txt", "utf8")
//     myReadStream.pipe(res)
// });

// server.listen(port,host,()=>{
//     console.log("server is listening on host" + port)
// });


const http = require ('http');
const host = "127.0.0.1:";
const port = "5500";
const server = http.createServer((req,res,)=>{
       res.writeHead("200",{"Content-Type":"tex/plain"});
       res.end("welcome")
});
server.listen(port,host,()=>{
    console.log("server is listening on host" + port)
})







// const myStudents=["samuel","oluchi","elizabeth","micheal"]

// const check=(student)=>{
//     if(myStudents.includes(`${student}`)){
//         return true
//     }
//     else if(!myStudents.includes(`${student}`)){
//         return false
//     }
// else{return 
//     false
// }
// }
// let name ="samuel"

// const real=check(name)
// const lizzy=new Promise(
// (resolve,reject)=>{

// if(real){
//     resolve(name+" you are a member of the class")
// }
// else{
//     reject(name+ " you are not a student") 
// }
// }
// )

// lizzy.then((result)=>{
//     console.log("suceesfull :,"+result)
// }).catch((samuel)=>{
//     console.log("error: "+samuel)
// })



