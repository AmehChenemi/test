const fs = require("fs")
const data = "i am proudly a backend developer trainee"

const MywriteStream = fs.createWriteStream("documents.txt")

MywriteStream.write(data, 'utf8')
MywriteStream.end()

MywriteStream.on('finish',()=>{
    console.log("i will become a successful Developer")
})   