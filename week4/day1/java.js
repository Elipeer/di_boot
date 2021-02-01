//exersize 1
	// let colors = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

	// colors.forEach((i,index) => {
	// 	console.log(`${index} choice is ${i}`)
	// })

//excersize 2
// let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "]; 
// let ordinal = ["th","st","nd","rd"]

// color.forEach((item, i, arr)=>{
// 	let str = (i>3 && i===0) ? ordinal[0] :
// ordinal[i];
// arr[i] = `${i+1}${str} choice is ${item}` 
// 	})
// console.log(color);

// //exersize 3
// console.log(is_string('hello')); 
// //true
// console.log(is_string([1, 2, 4, 0]));
// //false

//exersize 3
let bankAmount = 0
const vat = 0.17
let details = ["+200", "-100", "+146", "+167", "-2900"]
details.forEach(element => {
    bankAmount+=parseInt(element)*(vat+1)
});


//daily challenge
const gameInfo = [
 {
   username: "john",
   team: "red",
   score: 5,
   items: ["ball", "book", "pen"]
 },
 {
   username: "becky",
   team: "blue",
   score: 10,
   items: ["tape", "backpack", "pen"]
 },
 {
   username: "susy",
   team: "red",
   score: 55,
   items: ["ball", "eraser", "pen"]
 },
 {
   username: "tyson",
   team: "green",
   score: 1,
   items: ["book", "pen"]
 },
];

let arr = [];
   let bigarr = [];
   let sumscore = 0;
   gameInfo.forEach((element) =>{
       arr.push(element.username+"!")
       element.score > 5 ? bigarr.push(element.username):"";
       sumscore += element.score
   })
   console.log(sumscore)












