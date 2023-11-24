// // working with express
// // import express library
// const express = require("express");

// const port = 4000;
// const host = "localhost";

// let studentData = [
//   { id: 1, email: "david@gmail.com", password: "david12345" },
//   { id: 2, email: "loveth@gmail.com", password: "loveth12345" },
//   { id: 3, email: "isaac@gmail.com", password: "isaac12345" },
// ];

// // create a server
// const app = express();
// app.use(express.json());

// // send a get request
// app.get("/", (req, res) => {
//   res.send("Welcome to backend API");
// });

// // get all the students.
// app.get("/students", (req, res) => {
//   res.status(200).json({
//     data: studentData,
//   });
// });

// // get a single student
// app.get("/students/:id", (req, res) => {
//   // get the student id from the url
//   const studentId = parseInt(req.params.id);

//   // track the student with the id passed to the url
//   const student = studentData.find((student) => student.id === studentId);

//   // show the student by tracking for errors.
//   if (!student) {
//     res.status(404).json({
//       message: "Student not found.",
//     });
//   } else {
//     res.status(200).json({
//       data: student,
//     });
//   }
// });

// // create a new student
// app.post("/students", (req, res) => {
//   const student = req.body;

//   // automate the student id;
//   student.id = studentData.length + 1;

//   // push the new student in the database
//   const newStudent = studentData.push(student);

//   // check
//   if (!newStudent) {
//     res.status(400).json({
//       message: "Error creating student",
//     });
//   } else {
//     // show  response
//     res.status(201).json({
//       data: student,
//     });
//   }
// });

// // update a student
// app.put("/students/:id", (req, res) => {
//   // get the student id
//   const studentId = parseInt(req.params.id);

//   // get the student content
//   const student = req.body;

//   // iterate through the students database
//   for (let i = 0; i < studentData.length; i++) {
//     if (studentData[i].id === studentId) {
//       studentData[i] = { ...studentData[i], ...student };
//       res.status(200).json({
//         message: "Updated successfully",
//         data: studentData[i],
//       });
//     }
//   }
//   res.status(404).json({
//     message: `Student with id: ${studentId} is not found.`,
//   });
// });

// // delete a student
// app.delete("/students/:id", (req, res) => {
//   // get the student
//   const studentId = parseInt(req.params.id);

//   studentData = studentData.filter((student) => student.id != studentId);
//   res.status(200).json({
//     message: "Student deleted successfully",
//     data: studentData,
//   });
// });

// // listen to the server
// app.listen(port, () => {
//   console.log(`Server is listening on: ${host}:${port}`);
// });



const express = require("express");
const fs = require("fs");

const port = 6000;
const app = express();
app.use(express.json());

// use the instance to create our endpoint
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to our new json external file",
  });
});

// file path
const filePath = "./testData.json";

// function that writes to a json file
const writeToFile = async (data) => {
  try {
    await fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  } catch (err) {
    console.log(`Something went wrong. ${err.message}`);
  }
};

// read from a file
const readFromFile = async () => {
  try {
    const data = await fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.log(`Something went wrong. ${err.message}`);
  }
};

// CRUD functionality
// create a new student
app.post("/students",async (req,res)=>{
  // capture the data from the request body
 const newStudent= req.body;
//  get all students
const students = await readFromFile()
// auto increment the student id
newStudent.id = students.length + 1;
// add the new student to the existing json
students.push(newStudent);
// write to file
await writeToFile(students);
res.status(200).json({
  data:students
})




})
// get all students
app.get("/students", async (req, res) => {
  const students = await readFromFile();
  res.json({
    data: students
  });
});

 // ge a student
app.get("/students/:id",async (req,res)=>{

//  get the id
  const studentId = parseInt(req.params.id);

// get all students
  const students = await readFromFile();
  console.log(students)
  // get a student
  const student = students.find((student)=>(student.id===studentId))
//    check for errors
  if(!student){
  
    return res.status(404).json({
      error: "Student not found",
    });
  }
  res.status(200).json({
    data: student
  });
})


// update a student
app.put('/students/:id',async(req,res)=>{
  const studentId = parseInt(req.params.id);
  const student = req.body;
  const students = await readFromFile();

// iterate through the students database
  for (let i = 0; i < students.length; i++) {
    if (students[i].id === studentId) {
      students[i] = { ...students[i], ...student };

      await writeToFile(students);

      res.status(200).json({
        message: "Updated successfully",
        data: students[i],
      });
    }
  }
  res.status(404).json({
    message: `Student with id: ${studentId} is not found.`,
  });
});


// delete a student
app.delete("/student/:id",async (req,res)=>{
  const studentId = parseInt(req.params.id);
  const student6 = await readFromFile();
  const initialLength = student.length;
  newStudent = student.filter((student)=>student.id !==studentId)
  student.push(newStudent);
  await writeToFile(newStudent)

  if(initialLength === newStudent.length){
    res.status(404).json({
      message : "student id not found"
    })
  }
  res.status(200).json({
    message : "Deleted successfuly"
  })
})
app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});





// const express = require ("express")

// const port = 4040

// const app = express();

// app.use(express.json());

// const filePath = './database'

// async function writeToFile(data){
//     try{
//  await fs.writeFileSync(filePath,JSON.stringify(data),null,2)

//     }catch(err){
// console.log("err:unable to write to file")
//     }

// }
// async function readFromFile(){
//     try{
// await fs.readFileSync(filePath,"utf8")
//     }catch{
//         console.log('err:something went wrong')
//     }
// }

// // using CRUD functionality
// app.post('/students',async(req,res)=>{

// const nStudents = req.body
// await writeToFile(students);
// res.status(200).json({
//   data:students
// })



// })

// app.listen(port,()=>{
//     console.log("server is listening on "+ port)
// });