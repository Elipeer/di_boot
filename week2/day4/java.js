
/*
function age (myAge){
    let mom = myAge * 2
    let dad = mom*1.2
  console.log(`My mom is ${mom} and my dad is ${dad}`);

}
age(22);
// YOU NEED ONLY 1 PARAMETER: myAge
// INSIDE THE FUNCTION, YOU DO THE MATHEMATIC OPERATIONS






//DECLARING
function familyAge (myAge) {
  // display the age of the mum : twice my age
  // display the age the dad : 1.2 times the age the mum
  let ageMum = myAge*2
  let ageDad = ageMum*1.2
  console.log("The age of my mum is " + ageMum + " the age of my dad is " + ageDad)
  //the same as
  console.log(`The age of my mum is ${ageMum}, the age of my dad is ${ageDad}`)
}

familyAge(20);



function family(myAge) {
  let mom = myAge*2
  return mom;
}
family(22);
console.log(mom);


//optional, either prompt or define age in parameter
let age = prompt("How old are you?");

function checkDriverAge(age){
  if (age < 18){
    alert("You are under 18");
  }
  else if (age > 18) {
    alert("You are over 18");
  }
  else{
    alert("Congradulations on your first year of driving!");
  }

}
//optional, can use prompt instead
checkDriverAge(92);


//exercise 2
function changeEnough(change, total){
  let money = change[0] * 0.25 + change[1] * 0.1 + change[2] * 0.05 + change[3] * 0.01;
     if (money>total){
      console.log("You have enough money");
      return true;
     }
      console.log("You don't have enough money");
      return false;
     }

changeEnough([4,3,3,1], 4.35);

//exercise 3

let sum = 0;
for (let i = 23; i < 500; i++) {
  if (i % 23 == 0) {
    console.log(i);
    sum += i;
  }
}
console.log(sum);

//exercise 4
let amazonBasket = {
    glasses: 1,
    books: 2,
    floss: 100
}

function checkBasket(){
 let item = prompt("Which item would you like?");
  if (item in amazonBasket) {
    alert("it's in the basket!");
  }
  else{
        alert("it's not in the basket!");
  }
}
checkBasket();




//exercise 5

let stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

let prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

let arr = ["banana","orange","apple"];
function myBill(){
  for (var i = 0; i <= 5; i++) {
  
  if (arr == prices[i]) {
    console.log("stuf111f");
  }
  else{
        console.log("stuff");

  }
 }
}



myBill();



//exercise 6


let arr = prompt("enter a number")
        arr = arr.split(",").map(x => +x)//makes it an int
        let ltip = [];
        let final = [];
        function tips(arr) {
            for (price of arr) {
                console.log(price)
                if (price < 50) {
                    ltip.push(price * 0.2);
                    final.push(price * 1.2);
                    continue;
                }
                if (price > 200) {
                    ltip.push(price * 0.1);
                    final.push(price * 1.1);
                    continue;
                }
                ltip.push(price * 0.15);
                final.push(price * 1.15);
            }
        }
        tips(arr);
        console.log(ltip)
        console.log(final)













//exercise 7
 let cost = 0;
function hotel_cost(){

 let nights = prompt("How many nights would you like to stay?");
 cost = 140*nights;
     console.log(cost);
     return cost;
}

hotel_cost();

let price = 0;
function plane_ride_cost(){
   let destination = prompt("where would you like to stay?");
   price = 0;
   if (destination == "london") {
      price = 183
   }
   else if (destination == "paris") {
    price = 220;
   }
   else{
    price = 300;
   }
   console.log(price);
   return price;
}

plane_ride_cost();

let carCosts = 0;
function rental_car_cost(){
  let car = prompt("How many days do you need a car?");
  let dayPrice = 40;
  carCosts = dayPrice*car;
  if (car > 10){
    let perc = carCosts*.05
    carCosts = carCosts-perc;

  }
  console.log(carCosts);
  return carCosts;
}

rental_car_cost();



function totalCost(){
  console.log(cost + price + carCosts);
}

totalCost();
*/

// let words = prompt("add words", "hello, world, in , a, frame");

// let array = words.split(", ");

// console.log(array);

let rows = 9;
let columns = 7;
let star = "*";
let z;
let i;
 for(i = 0; i <= rows; i++){
    for (z = 0; z <= columns; z++) {
      
      i += star;
      
    }
console.log(i)
console.log(z)
}


































