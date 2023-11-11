//  A callback function is a function that is pass as an argument in another function

// setTimeout(()=>{
//     console.log("welcome")
// },4000)

// setTimeout(()=>{
//     console.log("welcome")
// },4000)

// setTimeout(()=>{
//     console.log("welcome")
// },4000)

// setTimeout(()=>{
//     console.log("welcome")
// },6000)


// let myName = ()=>{
//     console.log("Loveth")
// };
// setTimeout(myName,5000)





// let event = () => {
//     console.log("dec 25th is christmas")
// };
// setTimeout(event,4000)


// setTimeout(()=>{
//     console.log("welcome")
// },7000)





const  traffic=()=>{
    const green=setInterval((green)=>{
        console.log("Go :green color")
    },1000)
    
    setTimeout(()=>{
        clearInterval(green)
        console.log("stop moving")
    },11000)
    
    
    
    
    setTimeout(()=>{
        const yellow=setInterval(()=>{
            console.log("ready:yellowcolor")
        },1000)
    
        setTimeout(()=>{
            clearInterval(yellow)
            console.log("yellow has stopped")
            
            },5000)
    },12000)
    
    
    
    
    
    
    
    
    
    setTimeout(()=>{
        const red=setInterval(()=>{
            console.log("stop:red color")
        },1000)
       setTimeout(()=>{
        
    clearInterval(red)
    console.log("i am done running")
       },10000) 
    },18000)
    
    }
    
    
    
    
    
    
    traffic()
    
    setInterval(()=>{
        traffic()
    },27000) 






  



// const { error } = require('console');
// const fs = require('fs');
// const myDocument = "./callbacksTest.txt";
//  fs.readFile(myDocument,"utf8",(error,data)=>{
//     if(error){
//         console.log("message:" + error);
//         console.log("message:unable to readFile" + myDocument);
//     }else{
//         console.log(data);
//     }
// });

// const fs = require('fs')
//  const myDocument = "./callbackTest.txt"
// fs.writeFile(myDocument,"Developers are doing well today",(error,data)=>{
//     if(error){
//         console.log("error writing to this file")
//     }else{
//         console.log("successful")
//     }
// })



// import the module
// const { error } = require('console')
// const fs = require('fs')
// // get the doc path
// let doc = "./callbackTest.txt"
// fs.readFile(doc,'utf8',(error,data)=>{
//     if(error){
//         console.log("There is an error reading this file")
//     }else{
//         console.log(data)
//     }
// });
// let myDoc="./writetest.txt"
// fs.writeFile(myDoc,'welcome dear',(error,data)=>{
//    if(error){
//     console.log("There is an error writing this file")
//    }else {
//     console.log("resolved")
//    }
// });

// const fs =require('fs')
// const documents = "./callbackTests.txt"
// fs.readFile(documents,"utf8",(error,data)=>{
// if(error){
//     console.log('INCORRECT')
// }else{
//     console.log(data)
// }
// });
// setTimeout(()=>{
//     const document = "./writetest.txt"
//     fs.writeFile(document,"BABY",(error,data)=>{
//     if(error){
//         console.log('INCORRECT data')
//     }else{
//         console.log(data)
//     }
//     })
    
    
// },3000)






