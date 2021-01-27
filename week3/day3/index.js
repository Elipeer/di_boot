/*
function setBanner(){
	span = document.getElementById("span");
	var sec = 10;
	let func = setInterval(function(){
	        if (sec == 0) {
        	clearInterval(func);
        	console.log("DONE")
        }
      else {
      	sec--;
      	span.innerHTML = sec + "!";
      }

       },1000);
	}

setBanner()
*/

//excersize 1

// function myMove() {
//   let yellowBox = document.getElementById('animate');
//   var pos = 0;
//   let id = setInterval(function() {
//     if (pos == 350) {
//       clearInterval(id);
//     }
//     else {
//       pos++;
//       yellowBox.style.left = pos + "px";
//     }
//   }, 5);
// }


// //exersize 2
// function allowDrop(event) {
//   event.preventDefault(); // Necessary. Allows us to drop.
// }

// //add dashes
// function allowEnter(event) {
//   event.target.classList.add('over');
// }

// //remove dashes
// function allowLeave(event) {
//   event.target.classList.remove('over');
// }

// function dragStart(event) {
// //set the data to be dragged
// console.log("target:",  event.target)
// console.log("id: ",  event.target.id ) // id: square1
// event.dataTransfer.setData("text", event.target.id);
// }

// function dragDrop(event) {
// // console.log("event.target:",event.target) 

// // "event.target:" "<div id='square3' ondrop='dragDrop(event)' ondragover='allowDrop(event)'>square3</div>"
// event.preventDefault();
//   event.target.classList.remove('over');

// // retrieve the data dragged
  
// let data = event.dataTransfer.getData("text");
// console.log("data: ",  data) //data: square1 
  
// let box = document.getElementById(data)
// event.target.appendChild(box);
  

// }

// //1st step : set the attribute draggable to true
// let hello = document.getElementById("hello")
// console.log(hello)
// hello.setAttribute('draggable','true');

// hello.addEventListener("dragstart", dragHello)


// function dragHello(event){
// 	console.log(event.clientX)
// }


// hello.addEventListener("dragend", dropHello)

// function dropHello(event){
// 	let horizontal = event.clientX
// 	let vertical = event.clientY
// 	event.target.style.left = horizontal + "px"
// 	event.target.style.top = vertical + "px"
// 	event.target.style.position = "absolute"
// 	console.log(horizontal)
// }


//daily challenge
let text = document.getElementById("text");

text.addEventListener("keydown", function(event) {
    let isNumber = isFinite(event.key);
    if (isNumber) {
    	console.log("number", event)
    	event.preventDefault();
    }
    else{
    	console.log('letter')
    }
});



























