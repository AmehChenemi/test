// readStream
// import the file system module (fs)
// const fs = require ('fs')

// // read a file
// const myReadStream = fs.createReadStream("./documents.txt", "utf8")

// // read the file in chunks
// myReadStream.on("data",(chunk)=>{
//     console.log(`ourChunk: ${chunk}`);
// });

// // end the read stream opration 
// myReadStream.on("end",()=>{
//     console.log("END OF OPREATION");
// })


const fs =require ('fs')
const myReadStream =fs.createReadStream("./doc.txt", "utf8")
myReadStream.on("data",(chunk)=>{
       console.log('our chunk:${chunk}');
});
myReadStream.on("end",()=>{
    console.log("end of operation")
})
