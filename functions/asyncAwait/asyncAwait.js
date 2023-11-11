// working with async / await
// import the fils system module



// using function declaration
// const fs = require("fs");

// async function readFromFile() {
//     try{
//        const data = await fs.readFile("./testFile.txt","utf8",(error,data)=>{
//            if (error){
//             console.log("This file does not exist.");
//            }else{
//             console.log(data);
//            }
//        });
//     }catch (e){
//       console.log(e.message)
//     }
// }
// readFromFile();


// // using Arrow function

// const fs = require("fs");

// const readFromFile = async ()=>{
//       try{
//       const data = await fs.readFile("./testFile.txt","utf8",(error,data)=>{
//         if (error)
//         {
//           console.log("This is not correct");
//       }else{
//         console.log(data)
//       }
//       });
//       }catch(e){
//         console.log(e.message)
//       }
// }
// readFromFile();

// const fs = require("fs");

// async function readFromFile() {
//     try{
//        const data = await fs.readFile("./testFile.txt","utf8",(error,data)=>{
//            if (error){
//             console.log("This is not correct.");
//            }else{
//             console.log(data);
//            }
//        });
//     }catch (e){
//       console.log(e.message)
//     }
// }
// readFromFile();








// const fs = require('fs')

// async function readFromFile(){
//   try{
//     const data = await fs.readFile("./testFile.txt","utf8",(error,data)=>{
//       if(error){
//         console.log("incorrect")
//       }else{
//         console.log(data)
//       }
//     });

//   }catch (e){
//     console.log(e.message)
//   }
// }

// readFromFile();





// const fs =require ('fs')
//  async function readFromFile() {
//   try{
//     const data  = await fs.readFile("./testfile.txt")
      
//       console .log (data)
//      }catch (e){
//     console.log(e.message)
//   }
// }
// readFromFile();




// const fs = require ('fs')
// async function readFromFile(){
// try{
// const data = await fs.readFile("./read.txt","utf8",(error,data)=>{
//      if(error){
//      console.log("there is an error, try again")
          
//      }else{
//         console.log(data)
//      }
// });
// }catch(e){
//     console.log(e.message)
// }

// }
// readFromFile();

// const fs =require ('fs')
// async function writetoFile(){
//     try{
//          fs.writeFile("./asyncAwait.txt","welcome Loveth",(error)=>{
//        if (error){
//         console.log("message not found")
//        }else{
//         console.log("success")
//        }
//         })

//     }catch(e){
//         console.log(e.message)
//     }
// }
// writetoFile();



// const fs =require('fs')
// async function readFromFile() {
//     try{
// const data = await fs.readFile("./asyncAwait.txt","utf8",(error,data)=>{
//          if (error){
//             console.log('YOU CANT ACCESS THIS FILE')
//          }else {
//             console.log(" data");
//          }
// })
//     }catch(e){
//         console.log( e.message)
//     }
// }
// readFromFile();


const userPin = '1234'
let pin = '1235'
let entrance = (userPin)

setTimeout(()=>{
    console.log("kindly insert your card and input your pin")
},3000)

setTimeout(()=>{
 if (pin===!userPin){
    console.log("Incorect Pin")
}else{
    console.log("Welcome user Loveth,your account balance is $3000,kindly perform your transaction");
}
},4000)
