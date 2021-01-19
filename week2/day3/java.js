// for (var i = 0; i < 16; i++) {
// 		if (i%2 == 0) {
// 			console.log("This number is even.");
// 		}
// 		else{
// 			console.log(i + " This number is odd.")
// 		}
// 	}

// let friends = ["Lea", "Jonas", "David"]
// --> use a for loop to console.log each name and say hello
// --> 'hello lea'


// let friends = ["Lea", "Jonas", "David"];

// for (let i of friends) {
// 	console.log("Hello " + i);
// }



/*
//exersize 1
let colors = ["red", "blue", "green"];

console.log("My favorite color is " + colors[0]);
console.log("My favorite color is " + colors[1]);
console.log("My favorite color is " + colors[2]);


//exersize 2
let people = ["Greg", "Mary", "Devon", "James"];

for (let i of people){
 console.log(i);

}
//removing Greg.
people.shift();
console.log(people);

//changing James to jason
people[2] = "Jason";
console.log(people);

//adding Eli to list
people.push("Eli");
console.log(people);

//calling the index up until Jason
for (let i = 0; i <= people.length -1; i++) {
	console.log(people[i]);
	if (i == people.indexOf("Jason")) {
        
		break;
		}
        
        
}

//slicing mary and eli and creating new array with leftovers
let newPeople = people.slice(1, 3);
console.log(newPeople);

//get index of marry
console.log(people.indexOf("Mary"));
//call on non-existent element, returns -1
console.log(people.indexOf("Foo"));
//get last element of array
let last = people.pop(); //or last = people.length() - 1;
console.log(last);

//exersize 3
 let num = prompt("Enter a number");
    while (num < 11) {
        num = prompt("Enter a new number");
        console
    }

//exersize 4
let guestList = {
  Randy: "Germany",
  Karla: "France",
  Wendy: "Japan",
  Norman: "England",
  Sam: "Argentina"
}

let name = prompt("What is your name?")

      if (name in guestList){
      console.log("Hi! I'm " + name + " and im from " + guestList[name]);
      } else {
      console.log("Hi, I'm a guest.")
}


//exersize 5
let family = {
	son: "Eli",
	father: "Mosh",
	sister: "Shevy"
}
//pull just object keys
 for (i in family) {
 	console.log(Object.keys(family));
 	break;
 }
//pull property
  for (i in family) {
 	console.log(family);
 	break;
 }
//pull values
 for (i in family) {
 	console.log(family[i]);
 }

//exersize 6
let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
//sorts to alphebet order
let sort = names.sort();

console.log(sort);
let letter = ""
for (i in sort){
	letter += sort[i].slice(0,1);
	
}

console.log(letter);
*/

//Daily Challege
let star = ["*","* * ","* * *","* * * *","* * * * *","* * * * * *"];
let stars = ""

for (i in star) {
	//pull each element from star array
	stars = star[i];
	console.log(stars);
}

//or 
for(let i=1; i<=6; i++){
   console.log("* ".repeat(i));
}





































































































