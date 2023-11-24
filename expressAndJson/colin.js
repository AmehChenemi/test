const objOne = {name : "Loveth", age: 18, role : "Admin"};
const objTwo = { name: "David", age: 20, role: "Teacher"};
const objThree = {name:"vivian", age: 24, role:"Student"}

const update=(object2,object1, key, value)=>{
if(object2.role==="Admin"){
object1[key]=value;


console.log('updated:object2 updated to '+ key,  object1)
}else{
console.log("error:NotAuthorized,must be an admin to be able to update")
}
}
// update(objOne,objTwo);
update(objOne,objTwo,"age",22);

