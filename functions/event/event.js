// import the event module
const eventEmitter = require ("events");
//extend a class to the eventEmitter
class myEmitter extends eventEmitter{}
//create an object of the class myEmitter
   const  emittedObject = myEmitter()
   emittedObject.on("lightUp",()=>{
    console.log("Up NEPA")
   })
   emittedObject.emmit("lightUp")


