// javScriptMethod
// using uppercase
// const myName = "Loveth"
// const name = myName.toUpperCase()
// console.log(name);

// using lowercase
// const sex = "FEMALE"
// const gender = sex.toLowerCase()
// console.log(gender);

// // using charAt
// const fruit = ["Apple", "Banana", "kiwi"];
// const newFruit = fruit.charAt(6);
// console.log(newFruit);

// using charCodeAt
// using substring
// using substr

// using slice

// using splice
// using concat

// const weekday = "mon"
// const newWeekday ="day"
// console.log(weekday.concat(newWeekday).toUpperCase());
// const backend = ["loveth", "david"];
// const frontend = ["daniel", "colins", "franca"];

// const cohort03 = backend.concat("daniel");
// let index = cohort03.indexOf('daniel')
// console.log(cohort03)

//  using lenght
/*const names = ['loveth', 'ubani','paul','vivian','prosper','david'];
let size = names.length;
console.log(size)*/
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits[fruits.length] = "Kiwi";
// console.log(fruits)

// using tostring()
 /*const fruits = ['banana', 'pawpaw','mango','apple'];
 let newFruits = fruits.toString();
 console.log(newFruits)*/

//  using join()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const newFruits = fruits.join();
// console.log(newFruits)

// // using pop()
// const fruits = ['banana', 'pawpaw','mango','apple'];
// let newFruit = fruits.pop();
// console.log(newFruit)

// using push()
// const fruits = ['banana', 'pawpaw','mango','apple'];
// let newFruit = fruits.push('orange');
// let sum = fruits.concat (newFruit)
// console.log(sum)

// using shift()
// const fruits = ['banana', 'pawpaw','mango','apple'];
// let newFruit = fruits.shift().indexOf('pawpaw');;
// console.log(newFruit)

// using unshift()
// const fruits = ['banana', 'pawpaw','mango','apple'];
// let newFruit = fruits.unshift('grapes');
// let sum = fruits.concat (newFruit)

// console.log(newFruit,sum)

// changing indexes
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits[2] = "Kiwi";
// console.log(fruits)

// using delete
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let deleted = delete fruits[0];
// let deletedFruit = fruits.concat(deleted)
// console.log(deleted)

// Flattening an Array
// Flattening an array is the process of reducing the dimensionality of an array.

// The flat() method creates a new array with sub-array elements concatenated to a specified depth.

// Example
// const myArr = [[1,2],[3,4],[5,6]];
// const newArr = myArr.flat();
// console.log(newArr)

// using splice()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let newFruits = fruits.splice(2, 2, "Lemon", "Kiwi");
console.log(newFruits)

