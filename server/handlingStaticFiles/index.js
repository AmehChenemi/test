// // // import the module
// // const http = require("http");
// // const fs = require("fs");
// // const path = require("path");

// // // create a server
// // const server = http.createServer((req, res) => {
// //   // get the path specified from the request url
// //   const filePath = path.join(__dirname, "static", req.url);
// //   fs.exists(filePath, (fileExist) => {
// //     if (fileExist) {
// //       // read the file
// //       fs.readFile(filePath, "utf-8", (err, data) => {
// //         if (err) {
// //           res.writeHead(500, { "Content-Type": "text/plain" });
// //           res.end("Server error");
// //         } else {
// //           // pass the content of the file here
// //           const contentType = getContentType(filePath);
// //           res.writeHead(200, { "Content-Type": contentType });
// //           res.end(data);
// //         }
// //       });
// //     } else {
// //       res.writeHead(404, { "Content-Type": "text/plain" });
// //       res.end("File does not exist.");
// //     }
// //   });
// // });

// // // create a dynamic function for tracking file extensions using the switch
// // const getContentType = (filePath) => {
// //   // get the extension name
// //   const extensionName = path.extname(filePath);
// //   // switch the extension names
// //   switch (extensionName) {
// //     case "html":
// //       return "text/html";
// //     case "js":
// //       return "application/javascript";
// //     case "css":
// //       return "text/css";
// //     case "txt":
// //       return "text/plain";
// //     case "jpeg":
// //       return "image/jpeg";
// //     default:
// //       return "application/octet-stream";
// //   }
// // };
// // // listen to the server

// // const port = 4040
// // server.listen(port,()=>{
// //     console.log('server is listening on:http://localhost:'+ port)
// // })



// // import the module
// // const express = require("express");
// // const fs = require("fs");
// // const path = require("path");

// // const PORT = 4040
// // const app = express();
// // app.get('/',async(req,res)=>{

// // const filePath =path.join(_dirname,"static",req.url);
// // fs.exist(filepath,(fileExist)=>{
// //   if(fileExist)
// //   fs.readFile(filePath,"utf8",(error,data)=>{
// //         if(error){
// //           res.send("server error")
// //         }else{
// //           const contentType = getContentType(filePath)
// //           res.send(data)
// //         }
// //   })
// //   const getContentType = (filePath)=>{

  
// //     const extensionName = path.extname(filePath)
// //        switch(extensionName){
// //         case "html":
// //           return "text/html"
// //           case "css":
// //             return "text/css"
// //             case "image":
// //             return "image/jpeg"
// //        }
// //     }
// // })
// // app.listen(PORT,()=>{
// //   console.log("server is listening on http://localhost: "+PORT);
// // })

// // })



// // // create a server
// // const server = http.createServer((req, res) => {
// //   // get the path specified from the request url
// //   const filePath = path.join(__dirname, "static", req.url);
// //   fs.exists(filePath, (fileExist) => {
// //     if (fileExist) {
// //       // read the file
// //       fs.readFile(filePath, "utf-8", (err, data) => {
// //         if (err) {
// //           res.writeHead(500, { "Content-Type": "text/plain" });
// //           res.end("Server error");
// //         } else {
// //           // pass the content of the file here
// //           const contentType = getContentType(filePath);
// //           res.writeHead(200, { "Content-Type": contentType });
// //           res.end(data);
// //         }
// //       });
// //     } else {
// //       res.writeHead(404, { "Content-Type": "text/plain" });
// //       res.end("File does not exist.");
// //     }
// //   });
// // });

// // // create a dynamic function for tracking file extensions using the switch
// // const getContentType = (filePath) => {
// //   // get the extension name
// //   const extensionName = path.extname(filePath);
// //   // switch the extension names
// //   switch (extensionName) {
// //     case "html":
// //       return "text/html";
// //     case "js":
// //       return "application/javascript";
// //     case "css":
// //       return "text/css";
// //     case "txt":
// //       return "text/plain";
// //     case "jpeg":
// //       return "image/jpeg";
// //     default:
// //       return "application/octet-stream";
// //   }
// // };
// // // listen to the server

// // const port = 4040
// // server.listen(port,()=>{
// //     console.log('server is listening on:http://localhost:'+ port)
// // })



// const express = require("express");
// const fs = require("fs");
// const path = require("path");

// const PORT = 4040
// const app = express();

// app.use(( express.static ('staticFiles')))
// app.get('/',async(req,res)=>{

// const filePath =path.join(_dirname,"staticFiles",req.url);
// fs.exist(filepath,(fileExist)=>{
//   if(fileExist)
//   fs.readFile(filePath,"utf8",(error,data)=>{
//         if(error){
//           res.status(404)
//           res.send("server error")
//         }else{
//           res.status(200)
//           res.send(data)
//         }
//   })
 
// })
// app.listen(PORT,()=>{
//   console.log("server is listening on http://localhost: "+PORT);
// })

// })




