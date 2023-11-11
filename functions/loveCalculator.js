const loveCalculator = (males, females) => {

 const man = Math.floor(Math.random()*100) 

 const woman = Math.floor(Math.random()*100)
 
 const average = (man + woman)/2 ;

   
  setTimeout(()=>{
console.log(`The percentage of ${males} is ${man}% `)

  })
    setTimeout(()=>{
console.log(`The percentage of ${females} is ${woman}%`)

  },2000)
  setTimeout(()=>{
console.log(`The average is ${average}`)
  },3000)
      

setTimeout(()=>{
    if(average>=70){
        console.log('Result:you are compatible,you can get married')
    }else if (average>=60){
        console.log('Result:you are slightly compatible')
        
    }else if (average>=50){
        console.log('Result:you are Manageable')
    
    }else if(average>=40){
        console.log('Result:you cannot get married')
    }else{
        console.log('Result:RUN FOR YOUR DEAR LIFE')
    }
},5000)


}

loveCalculator("Paul","Loveth");





// const loveCalculator = (males,females)=> {
//     const male = Math.floor(Math.Random()*100)
//     const female = Math.floor(Math.Random()*100)
//     const average = (male + female)/2

//     setTimeout(()=>{
//         console.log()
//     })

// }