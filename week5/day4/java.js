/*
We have a tree that goes through 2 cycles
of height every year.
In the spring it doubles
in height and in the summer it increases
in height by 1 (whatever measurement system you want to use).
The purpose of the function is to output the height
of the tree after a certain number of height cycles.
If we want to know the height of the tree after 5 height cycles,
here is how we will calculate it:
At cycle 0, the initial height of the tree is 1.
At cycle 1, the tree doubles in height so its height is now 2.
At cycle 2, the tree increases in height by 1.
The tree’s height is 3.
At cycle 3, the tree doubles in height again so its height is now 6.
At cycle 4, the tree increases in height by 1.
The tree’s height is now 7.
At the final cycle - 5- , the tree doubles in height
making the tree’s height 14.
The function will output 14.

let height = 1;
function summer(){
	height += 1;
	console.log(height)
	return height;
}

function spring(){
	height = height*2
	console.log(height)
	return height;
}

function cycles(count){
	for (var i = 0; i < count; i++) {
		if (height %2 == !0) 
		spring()
	else
		summer()
	}	
	console.log(height)
}

cycles(6)
*/
//exersize 1
// const func = async () =>{
// 	let response = await fetch("https://swapi.dev/api/starships/9/")
// 	let json = await response.json()
// 	console.log(json)
// }

// func()


// //exersize 2
// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('resolved');
//         }, 2000);
//     });
// }

// async function asyncCall() {
//     console.log('calling');
//     let result = await resolveAfter2Seconds();
//     console.log(result);
// }
// //calling will be called and then result
// asyncCall();

// let resolveAfter2Seconds = function () {
//     console.log("starting slow promise");
//     return new Promise(resolve => {
//         setTimeout(function () {
//             resolve("slow");
//             console.log("slow promise is done");
//         }, 2000);
//     });
// };

// let resolveAfter1Second = function () {
//     console.log("starting fast promise");
//     return new Promise(resolve => {
//         setTimeout(function () {
//             resolve("fast");
//             console.log("fast promise is done");
//         }, 1000);
//     });
// };

// let sequentialStart = async function () {
//     console.log('==SEQUENTIAL START==');
//     const slow = await resolveAfter2Seconds();
//     console.log(slow);
//     const fast = await resolveAfter1Second();
//     console.log(fast);
// }
// //first slow thne fast
// sequentialStart()

// let resolveAfter2Seconds = function () {
//     console.log("starting slow promise");
//     return new Promise(resolve => {
//         setTimeout(function () {
//             resolve("slow");
//             console.log("slow promise is done");
//         }, 2000);
//     });
// };

// let resolveAfter1Second = function () {
//     console.log("starting fast promise");
//     return new Promise(resolve => {
//         setTimeout(function () {
//             resolve("fast");
//             console.log("fast promise is done");
//         }, 1000);
//     });
// };

// let concurrentStart = async function () {
//     console.log('==CONCURRENT START with await==');
//     const slow = resolveAfter2Seconds();
//     const fast = resolveAfter1Second();
//     console.log(await slow);
//     console.log(await fast);
// }

// setTimeout(concurrentStart, 4000)

//exersize 3
// const urls = [
//         "https://jsonplaceholder.typicode.com/users",
//         "https://jsonplaceholder.typicode.com/posts",
//         "https://jsonplaceholder.typicode.com/albums"
//       ];
// const getData = async function() {
//   const [ users, posts, albums ] = await Promise.all(urls.map(url =>
//       fetch(url).then(resp => resp.json())
//   ));
//   console.log('users', users);
//   console.log('posta', posts);
//   console.log('albums', albums);
// }

// getData()




//daily challenge
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'foo');
});


async function func(){
arr = await Promise.all(
[promise1, promise2, promise3]);
console.log(arr)
}


func()








