/*
//calculator
let arr = []

function my_f(sign){
	let str = arr.join('');
    let elm = document.getElementById("bar");
    elm.innerHTML = str;
  if(sign==="="){
    let string = arr.join('');
    let calc = eval(string);
    let elm = document.getElementById("bar");
    elm.innerHTML = calc;
    console.log(calc);
  }
  else if(sign==='reset'){
    arr = []
    elm.innerHTML = "Cleared";
  }
  else{
    arr.push(sign)
    let str = arr.join('');
    
    let elm = document.getElementById("bar");
    elm.innerHTML = str;

    
}
}


// daily challenge!
//this is a real mind fuck...
let bottles = prompt("How many bottles?");

let array = ["", "Bottles of beer on the wall", "", "bottles of beer Take", "1", "down pass it around"];

 for (var i = 0; i < bottles; i++) {
 	bottles = bottles -i;
 	for (var x = 0; x < bottles; x++) {
 	array.splice(0,1,bottles);
    array.splice(2,1,bottles);
    array.splice(4,1,i+1);
    var newArr = array.join(" ");
    
 	}
 	console.log(newArr);
        }
   */
function hangman(){

var letters = ["j","a","v","a","s","c","r","i","p","t"];
var star = ["*","*","*","*","*","*","*","*","*","*"];
let i = 0;
let choice = prompt('please choose a letter');

for (i in letters) {
    if (letters[i] === choice) {
        star[i] = choice;
        var join = star.join(" ")
        alert("Good job, you got it!");
        console.log(join);
        
    }
    else{
    	console.log('wronggg')

    }
} 

}

hangman()

//  var letters = ["j","a","v","a","s","c","r","i","p","t"];
//  var star = ["*","*","*","*","*","*","*","*","*","*"];
// let letter =""
// for (letter in letters) {
//  	if (letter === )
//  } 
 

//  function hangman(){
    
//     var index = letters.indexOf(choose);
//     if (letters.indexOf(choose) != -1){
// 		star.splice(index,1,choose);
// 		console.log(star.join(" "))
//        	hangman();
// 	}
// 	else{
// 		console.log("Ooops, you got it wrong")
// 		//add fuction to remove 1 life
// 	}
//  }
 
// 	hangman()

















