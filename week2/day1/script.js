// let addressNumber = 5
// let addressStreet = "BenYehuda"
// let country = "Israel"

// let globalAddress = "I live in, " + addressStreet +" " + addressNumber +" in " + country;
// console.log(globalAddress);

// let birthYear = 1998;
// let year = 2025;

// let age = year - birthYear;

// console.log("I will be " + age + " in " + year);

// let pets = ["cat", "dog","fish","rabbit","cow"]
// console.log(pets[1]);

//  pets.push("horse");

//  console.log(pets.length);


// let str1 = "mix"
// let str2 = "pod"
// let newWord = str2 + " " + str1;
// console.log(newWord);

// let firstNumber = prompt("First Number");
// let secondNumber = prompt("Second Number");
// let solve = +firstNumber + +secondNumber;

// alert(solve);

// let sentance = ["all", "i", "want", "to", "do", "is", "find", "nemo"];
// let index = sentance.indexOf("nemo");
// let nemo = index +1;
// console.log("i found nemo at ", nemo);
// if (index <0){
// console.log("cant find nemo");
// }


let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

fruits.splice(0,1);
fruits.push("Kiwi");
fruits.shift();
fruits.sort();
fruits.reverse();
console.log(fruits);  

let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
let array = moreFruits[1];
let Orange = array[1];
console.log(Orange);





















