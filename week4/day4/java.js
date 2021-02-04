//mind games
/*
let b = 3, d = b, u = b;
			//3  * //9 * //4
const tree = ++d * d*b * b++ +
   //+3.  +  2
 + --d+ + +b-- +
 //+ 9.    3
 + +d*b+ + u
 console.log(tree)
 */
/* Birthday Cake Candles
*  This array are Birthday Cake Candles
*  You can blow only the tallest candles
*  let ar = [2,4,4,1]
*  birthdayCakeCandles function will return
*  how many candles you can blow
*/
//math.Max
// function birthdayCakeCandles(arr) {
//     let maxNum = Math.max(...arr);
//     let filtered = arr.filter( value => {
//         return value === maxNum;
//     });
//     return filtered.length;
// }
// console.log(birthdayCakeCandles([2,4,4,1]))

/*
* findIntersection function return an array that
* contain the numbers exist in both strings from the array.
* ["1,2,5,6,7", "2,5,7,8,15"] => [2,5,7]
*/

// let array = ["1,2,5,6,7", "2,5,7,8,15"]

// const filter = array.filter((item,i)=>{
// 	return item.slice(',').includes(item)
// })

// console.log(filter)

/* Nested Object Destructuring */
// const population5 = {
//   tokyo: 37833000,
//   delhi: 24953000,
//   shanghai: 22991000,
//   datetime:{
//     time:1600,
//     date:02022021
//   }

// }

// const {tokyo,delhi,shanghai,datetime} = population5

// console.log(tokyo,delhi,shanghai,datetime)

const users = {
  user1: {
    age: 44,
    name: 'picard',
  },
  user2: {
    age: 12,
    name: 'sisko',
  },
  user3: {
    age: 109,
    name: 'janeway',
  },
}
// filter for all users older than 30
// and store their data in an array
// use Array.filter Array.map
// [
//   { id: 'user1', age: 44, name: 'picard' },
//   { id: 'user3', age: 109, name: 'janeway' },
// ]

//const people = Object.values(users).filter((item) => item.age>40);

// class Fruit {
//   constructor(param){
//     this.name = param;
//   }
//   setName(param){
//     this.name = param;
//   }
//   getName() {
//     return this.name;
//   }
// }
// let apple = new Fruit('Aplle');
// let orange = new Fruit('Orange');
// console.log(apple.getName());
// console.log(orange.getName());

// class Orange extends Fruit {
//   constructor(){
//     super('Ornage');
//     this.color = '';
//   }
//   setName(param){
//     this.color = param;
//   }
// }
// let orange = new Orange();
// console.log(orange.getName());


// class GreenOrange extends Orange {
//   constructor(){
//     super();
//     this.color = 'Green';
//   }
//   getColor(){
//     return this.color;
//   }
// }
// let go = new GreenOrange();
// console.log(go.getName());
// console.log(go.getColor());
//exersize 1
// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }

// const {name, location: {country, city, coordinates: [lat, lng]}} = person;

// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

//exersize 2
// const hello = ({first,last})=>{
// 	return `my name is ${first} ${last}`
// }

// console.log(hello({first: 'Eli', last:'Peer'}))

//exersize 3
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const member = new Person('John');
// console.log(typeof member);

//exersize 4
// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// };//3

class Video {
	constructor(helo){
    this.title = 'big bang';
	this.uploader = 'eli';
	this.time = '59 min';
}
    watch(helo){

 return `${this.uploader} watched all ${this.time} of ${this.title}`
    }
}
let a = new Video()
console.log(a.watch())














