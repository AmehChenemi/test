const {createReadStream, createWriteStream} = require("fs")
const {Transform} = require("stream")

const readable = createReadStream("./doc.txt")
const writable = createWriteStream("./documents.txt")

const TransformToUpperCase =  ()=>{
    return new Transform({
        transform(chunk,encoding,callback){
            const uppercase = chunk.toString().toUpperCase()
            callback(null,uppercase)
        }
    })
} 

const uppercase = TransformToUpperCase()
readable.pipe(uppercase).pipe(writable)
console.log("Done")