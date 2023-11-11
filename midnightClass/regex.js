// const password = prompt("Enter your password");
// let trials = 2

// const passwordRegex = /^(?=.[a-z]).{8,}$/;

// if (!password) {
//   alert("You entered an invalid password");
//   alert("you have 1 more attempt")
// } else {
//   alert("Login Successful");
// }
async function password(){

}try{
  const data = await password((err,data)=>{
 const password = prompt("Enter your password");
 let trials = 2

const passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.*\d).{8,}$/;

if(err){
  alert("You entered an invalid password.You have 1 more attempt");


}else{
  alert('Login successful')
}                          o                                                                       ;'''
''[k]
  })

}catch(e){
  console.log(e.message)
}
password();





// const email = prompt("Enter your Email")
//             const password = prompt("Enter your password")

//             const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,5}$/;  
//             const passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.*\d).{8,}$/;

//             if (!emailRegex.test(email)) {
//                 alert("Invalid email format. Please enter a valid email address.");
                
//             }
            

//              if (!passwordRegex.test(password)) {
//                 alert("Invalid password format. Please use at least 8 characters with one uppercase letter, one lowercase letter, and one digit.");
                
//             }
//             else{
//                 alert("You have logged in succesfully")
//             }