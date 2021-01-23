/*

console.log("hello again!");

var num = 8;
var num = 10;
console.log(num);
// output obviously 10


//change the var to let, and youll get an undefined.
function numbers() {
  for (let i = 0; i < 5; i += 1) {
    console.log(i);
  }
    console.log(i);
}
numbers();

*/

var accountMoney = 500;
var vat = .20;
var transactions = 2100;

var afterVat = transactions + transactions*vat;

var sum = "";

if (transactions < 0) {
	sum = accountMoney + afterVat;
}
else{
	sum = accountMoney + transactions;
}


console.log(sum);

































