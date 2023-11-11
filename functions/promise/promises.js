// promise takes 2 parameters = resolve and reject


// syntax of promise

// const value = new Promise((resolve,reject)=>{
//     return resolve

// })



// function wait(ms) {
//     return  new Promise((resolve) =>{
//         setTimeout(resolve,ms)
//     });
// }
// wait(5000).then(() => {
//     console.log("Ahmed was the instructor for today's class")
// });
// function BackendStudents (female, male) {
//     console.log("the girlfriend of " + male + " is " + female)
// }
//         BackendStudents ("Loveth","Paul")




// Assignment = build a love calculator



//  const firstEvent = new Promise((resolve)=>{
//      const male = Math.floor((Math.random)*100)
//      resolve(male)
//     //  male === Ahmed;
// });

// const secondEvent = (m) =>{
//         const male = m
//     const female = Math.floor((Math.random)*100)
//     const average = (male + female)/2;
//     const result = [male == m, female == female, average == average]
//     return result
// // female === Mary;

// }

// const thirdEvent = (m) =>{
//     switch (true){
//         case(m.average >=70):
//         return ("male is " + male + " female is" + female + "average is"  + average + " You are compatible, you can marry")
//         case (m.average >=60):
//             return ("male is " + male + " female is" + female + "average is"  + average + " You are slightly compatible")
//             case (m.average >=50):
//                 return ("male is " + male + " female is" + female + "average is"  + average + "Manageable")
//                 case (m.average >=40):
//                 return ("male is " + male + " female is" + female + "average is"  + average + "don't worry")
//                  default
//                 return ("male is " + male + " female is" + female + "average is"  + average + "Run for your life")



//     }
// };
// fucntion failureCallback(error){
//     console.error("This error happened" + error);
// }
// firstEvent.then((result) => secondEvent(result))
// .then((newResult) => thirdEvent(newResult))
// .then((finalResult) => 
//     console.log('This is our verdict ' + finalResult)
// })
// .catch(failureCallback)
    




// const names = "ubani"
// setTimeout((resolve)=>{
//   return resolve;  

// })





// const fs = require ('fs')
// const myDoc = "./promiseTest.txt"
// fs.readFile(myDoc,"utf8",)
// .then((data)=>{
//     console.log(data)
// } );

// .catch((e)=>{
//    console.log("message",e)
// });



// const fs =require('fs').promises;
// const myDocument ="./promiseWrite.txt";
//  fs.writeFile(myDocument,"Work hard",)
//  .then(()=>{
//     console.log("success")
//  })
//  .catch((e)=>{
//     console.log(e.message)
//  });


// const fs =require('fs').promises
// const document ="./promiseTest.txt"
// fs.readFile(document,'utf8',)
// .then(()=>console.log("success"))
// .catch(()=>console.log("error"));

// const doc ="./promiseWrite.txt"
// fs.writeFile(doc,'Work Smart',)
// .then(()=>console.log("job done"))
// .catch(()=>console.log("err"))


// const fs =require('fs').promises
// const doc = './promiseTest.txt'
// fs.readFile(doc,'utf8')
// .then(()=>{
//     console.log("weldone")
// })
// .catch(()=>{
//     console.log('err')
// });


const fs = require('fs').promises
const docs = "./promiseWritessss.txt"
fs.writeFile(docs,"Promise is a debt",)
.then(()=>console.log('succcess writing to this file'))
.catch((err)=>console.log('error.message'))



const dox = "./promiseTest.txt"
fs.readFile(dox,"utf-8")
.then(()=>console.log("successful"))
.catch(()=>console.log("err"))

