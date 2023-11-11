// const email = prompt("input email")
// const checking =  /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

// if (checking.test(email)){
//     alert("you have been logged in successfully")

// }else{
// alert("invalid email")
// }


// const userDetails = {
//     "names" : "loveth",
//     "age" :  "45",
//     "sex": "female",
//     "school": "The Curve",
//     "stack": "bckend",
//     "alive" : "true"
      
// }
// console.log(userDetails[]names)



const email = prompt("Enter your Email")
            const password = prompt("Enter your password")

            const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,5}$/;  
            const passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.*\d).{8,}$/;

            if (!emailRegex.test(email)) {
                alert("Invalid email format. Please enter a valid email address.");
                
            }
            

             if (!passwordRegex.test(password)) {
                alert("Invalid password format. Please use at least 8 characters with one uppercase letter, one lowercase letter, and one digit.");
                
            }
            else{
                alert("You have logged in succesfully")
            }