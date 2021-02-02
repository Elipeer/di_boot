/*
console.log(array)
*/
/* Exercise reverse
*  reverse each word in a given String
*  For example:
*  Given this 'word in a given String'
*  result 'drow ni a nevig gnirtS'
*  Do not use Array method


//how to reverse a string
// function reverseWord(str) {
//   // let arr = str.split('');
//   let ret = "";
//   for (var i = str.length-1; i >= 0; i--) {
//     ret = ret + str[i]
//   }
//   return ret;
// }

// function reverseAll(str) {
//   let arr = str.split(" ");
//   arr.forEach ( (item,i,ret) => {
//     ret[i] = reverseWord(item);
//   })
//   return arr.join(' ');
// }
// console.log(reverseAll('word in a given String'));

//loop through arrays with map
let users = ['eli','adam','galina','ziv'];
const emails = users.map( item => {
   return item +'@gmail.com';
});
console.log(emails);

let arr1 = [1, 2, 3, 4];
let arr2 = arr1.map(x => {
  return [x * 2];
});
console.log(arr2);
*/

/* Exercise
* Create an function that get an array of Numbers as input
* and return a new array with all numbers greater than 3
* For example:
* Give this array [0,1,1,2,3,5,8]
* result [5,8]

//filter
let arr = [0,1,1,2,3,5,8];
const filterArr = arr.filter( item => {
  return item > 3;
});
console.log(filterArr);


const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
// get all names that start with Sa

const filterArr = dragons.filter( item =>{
	return item.includes('Sa')
})

console.log(filterArr);
*/

/* Exercise
* Create an function that get an array of Numbers as input
* and return the sum of all numbers
* For example:
* Give this array [2, 5, 10,100]
* result 117
*/


/* reduce */
// let numbers = [2, 5, 10,100];
// const newNumbers = numbers.reduce((total, item) => {
//   return total + item;
// });
// console.log(newNumbers);
//reduce with objects
// let account = [{dolars:2}, {dolars:5}, {dolars:10},{dolars:100}];
// const total = account.reduce((accumulator, item) => {
//   return {dolars:(accumulator.dolars + item.dolars)};
// })
// console.log(total);


// Given n, take the sum of the digits of n.
// If that value has more than one digit,
// continue reducing in this way until a single-digit
// number is produced.
// This is only applicable to the natural numbers.
// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
/*
function whatever(num){
	let arr = Array.from(num.toString()).map(Number);
	const totalVal = arr.reduce((total, item)=>{

		return total + item;
	})

	return (totalVal<10) ? totalVal : whatever(totalVal)    
}
console.log(whatever(49319397765546437));

//exersize 1
//------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result, 'result');

//------2------
const country = "USA";
console.log([...country]);

//------Bonus------
let newArray = [...[,,]];
console.log(newArray);

//exersize 2
let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];


const residents = users.filter(item => {
   
   	return item.role.includes("Full Stack")
	
})


//mapping to get first name of objects in residents
const helloUser = residents.map( item => {
   return 'congrats ' + item.firstName;
});

console.log(helloUser);


// exersize 3

let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const str = epic.reduce((total, item, x) =>{
	return total + ' ' + item
	//or
	//return x == 0 ? item : total + ' ' + item;
})

console.log(str)

let student = [{name: "Ray", course: "Computer Science", isPassed: true}, 
{name: "Liam", course: "Computer Science", isPassed: false}, 
{name: "Jenner", course: "Information Technology", isPassed: true}, 
{name: "Marco", course: "Robotics", isPassed: true}, 
{name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
{name: "Jamie", course: "Big Data", isPassed: false}];

const passed = student.filter((item)=>{

	return item.isPassed==true
})

console.log(passed)

const mapper = passed.map((name)=>{
	return 'congrats ' + name.name
})

console.log(mapper)
*/
//xpgold
// const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => {
//     console.log(num, i);
//     alert(num);
//     return num * 2;
//     //i=5
// })

//4-1

// const array = [[1],[2],[3],[[[4]]],[[[5]]]]
// console.log(array.flat())
//4-2
//const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
// console.log(greeting.flat())
//4-3
//console.log(greeting.flat().join(' '))
//4-4
// const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
// console.log(trapped.flat(26))





//daily challenge
// const users = { user1: 18273, user2: 92833, user3: 90315 }

// const result = Object.entries(users)

// console.log(result)

// const mult = Object.keys(users).map((key, index) =>{
// 	return users[key] *= 2;
// })

// console.log(mult)




























