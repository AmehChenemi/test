
// // const express =require('express')
// // const PORT = 4040

// // const app = express();

// // app.get('/', async(req,res)=>{
// //     res.send('welcome to my API Homepage')

// // })
// // app.listen(PORT,()=>{
// //     console.log('server is listening on'+ PORT)
// // })

const express = require ('express')
const fs = require ("fs")
const path = require ("path")

const PORT = 4040


const app = express();

app.use(express.static('staticFiles'))

app.get('/',async(req,res)=>{
  const filePath = path.join(__dirname, req.url)

  fs.exists(filePath,(fileExist)=>{
    if(fileExist){
      fs.readFile(filePath,"utf8",(error,data)=>{
        if(error){
            res .status(500)
            res.send("server error")
        }else{
          res.status(200)
          res.send(data)
        }
      })
    }else{
      res.status(404)
      res.send("unable to find file")
    }
  })
   
})
app.listen(PORT,()=>
    console.log('server is listening on ' + PORT)
)


// // var express = require('express');
// // var PORT = 5000
// // var app = express();
// // app.get('/', function (req, res) {
// // res.send("Welcome to GeeksforGeeks!");
// // });
// // app.listen(5000,()=>{
// //  console.log('server is listening on ' + PORT)

// // });



// // const express = require('express')
// // const PORT = 4040

// // const app = express();

// // app.get('/', async(req,res)=>{
// //     res.send("welcome")
// // })

// // app.listen(PORT,()=>{
// //     console.log("server is listening on "+PORT);





// // const express = require("express");
// // const fs = require("fs");
// // const path = require("path");

// // const PORT = 2020
// // const app = express();

// // app.use( express.static ('staticFiles'))
// // app.get('/',async(req,res)=>{

// // const filePath =path.join(_dirname,req.url);
// // fs.exists(filepath,(fileExist)=>{
// //   if(fileExist){
// //     fs.readFile(filePath,"utf8",(error,data)=>{
// //       if(error){
// //         res.status(500)
// //         res.send("server error")
// //       }else{
// //         res.status(200)
// //         res.send(data)
// //       }
// // })

// // }else{
// //   res.status(404)
// //   res.send('file not found')
// // }
// // })

  
  
// // app.listen(PORT,()=>{
// //   console.log("server is listening on http://localhost: "+PORT);
// // })

// // })




// const express = require("express");
// const fs = require("fs");
// const path = require("path");

// const PORT = 2020
// const app = express();

// app.use( express.static ('staticFiles'))
// app.get('/',async(req,res)=>{

//   // const filePath =  path.join(__dirname,req.url)
//   // fs.exists(filePath,(fileExist)=>{
//   //   if(fileExist){
//   //     fs.readFile(filePath,"utf8",(error,data)=>{
//   //       if(error){
//   //         res.status(500)
//   //         res.send("server error")
//   //       }else{
//   //         res.status(200)
//   //         res.send(data)
//   //       }
//   //     })
//   //   }else{
//   //     res.status(404)
//   //     res.send("file not found")
//   //   }
//   // })
// app.listen(port,()=>{
//   console.log("server is listening to http://localhost:"+ port)
// })
// })