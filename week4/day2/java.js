/*
const y = (a) => {
    return (b) => {
      return a * b;
    }
}
const VAT = 1.17;
let m = y(VAT);
console.log(m);
console.log(m(2));

//fffff
function checkAge(age) {
  if (age >= 18) {
    return true;
  }
  else {
    return false;
  }
}
let age = 16;
if ( checkAge(age) ) {
  console.log('Access granted');
} else {
  console.log('Access denied');
}

//fffff
// Default values 
function getUsers() {
  let arr = ['zivuch','eli','igor','galina'];
  return arr;
}
function showMessage(from, users = getUsers()) {
  users.forEach(item => {
    console.log(`${from} ${item}`);
  })
}
showMessage("Hello");
showMessage("Bye", ['zivuch']);

///dddd
// reference type
// by referens vs by value
let a = 5;
let b;
b = a;
b++;
console.log(a);
console.log(b);

let arr1 = [1,3,4];
let arr2 = arr1
console.log('arr1',arr1);
console.log('arr2',arr2);
arr2[1] = 5;
console.log("arr1",arr1);
console.log("arr2",arr2);

let obj1 = { value: 10 }
let obj2 = obj1;
let obj3 = { value: 10 }
obj2.value = 15;
console.log('obj1',obj1.value); //15 //10
console.log('obj2',obj1.value); //15
console.log('obj3',obj3.value); //10
const arr3 = [1,3,4];
let arr4 = [].concat(arr3);
let arr4 = [...arr3];
arr4[2] = 6;
console.log('arr3',arr3);
console.log('arr4',arr4);

//ufuyfu
let obj1 = {
   a: 'java',
   b: {
     type: 'script'
   }
}

console.log(obj1.a + obj1.b.type);
let obj2 = {...obj1}
console.log(obj1);
console.log(obj2);
obj1.a = "c++";
console.log(obj1); // java
console.log(obj2); // c++
obj2.b.type = 'css';
console.log('obj1', obj1);  // script
console.log('obj2', obj2);  // css

// deep cloning
let obj1 = {
   name: 'Jhon',
   lastname: {
     b:'Dho'
   },
   sss:[0,9,8]
}
console.log(obj1);
const str = JSON.stringify(obj1)
console.log(str);
let obj2 = JSON.parse(str);
obj1.lastname.b='bla bla';
console.log('obj1',obj1);
console.log('obj2',obj2);
*/
//exersize 1
// let sum = (a,b) => a + b;
// console.log(sum(2,3));

//exersize 2
// const addTo = x => y => x + y;
// var addToTen = addTo(10);
// console.log(addToTen(3)); //returns 13

//exersize 3
// const sum = (a, b) => a + b
// const curriedSum = (a) => (b) => a + b
// console.log(curriedSum(30)(1))
//returns 31, a + b

//exersize 4
// const sum = (a, b) => a + b
// const curriedSum = (a) => (b) => a + b
// const add5 = curriedSum(5)
// console.log(add5(12)) //17

//exersize 5
// const compose = (f, g) => (a) => f(g(a));
// const add1 = (num) => num + 1;
// const add5 = (num) => num + 5;
// console.log(compose(add1, add5)(10))//16

//xp gold
//exersize 1
// let landscape = function()
// {
//  let result = "";
//  let flat = function(x)
//  {
//    for(let count = 0; count<x; count++)
//    {
//      result = result + "_";
//    }
//  }
//  let mountain = function(x)
//  {
//    result = result + "/"
//    for(let counter = 0; counter<x; counter++)
//    {
//      result = result + "'"
//    }
//    result = result + "\\"
//    console.log(result)
//  }

// flat(4);
// mountain(4);
// flat(4)

// return result;
// }
// landscape();
//result is ____/''''\ because we looped 4

//ninja
//const mergeWords = (string) => nextString => nextString === undefined ? string : mergeWords(string + ' ' + nextString);


/*
//daily challenge
let groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}
//1
let groceries2 = {...groceries}
console.log(groceries2);
//2
groceries.totalPrice = "$35"
console.log(groceries)
//will not be seen in copied groceries.

//3
groceries.other.payed = false;
//you will see it in both because it doesnt copy nested objects.
*/


























