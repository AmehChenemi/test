//  creating a sever with http
// import the required module
const http = require('http')
// create a port
// const PORT = 3000;
// create a host for the port that has been created
// const host = 'localhost';
// create a server
// const server = http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':'text/plain'})
//     res.end("Ubani the Great Instructor")
// });
// server.listen(PORT,()=>{
// console.log('server is listening on '+ PORT )

// });

// creating a server with express
// const express = require('express')

// const PORT = 2000;
// const host = 'localhost'

// const app = express();

// app.get('/',async(req,res)=>{
//     res.send('welcome')
// });
// app.listen(PORT,()=>{
//     console.log('server is listening to ' + PORT)

// });


// writing a file using asyncAwait
// const  fs = require ('fs')
// const path ="./write.txt"
// const file = async function writeToFile(){
// try{
// const data =await fs.writeFile(path,"weldone bby girl","utf8",(err,data)=>{
//     if (err){
//         console.log("unable to write to file")
//     }else{
//         console.log("you have successfully write to this file "  )
//     }
// })
// }catch(e){
//     console.log(e.message)
// }
// }
// file();
