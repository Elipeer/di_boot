/*
localStorage.setItem('myCat', 'Tom');

let cat = localStorage.getItem('myCat')||"Not Found";
console.log('myCat=>',cat);

localStorage.removeItem('myCat');

cat = localStorage.getItem('myCat')||"Removed";
console.log('myCat=>',cat);
localStorage.clear();

let obj = {
  name:'Someone',
  date:'15-02-2021'
}

localStorage.setItem('myObj', JSON.stringify(obj));
let myObj = localStorage.getItem('myObj')||"Not Found";
console.log('myObj=>',JSON.parse(myObj));
*/

let arr = [];

function addFunc(){
	let container = document.getElementById('container');
	let inputVal = document.getElementById('input').value;
	let item = document.createElement('div');
	item.innerHTML = inputVal;
	container.appendChild(item)
	let obj = {
		item : inputVal 
	}
	arr.push(obj)
	storeList(arr)
    
}


function storeList(val){
	window.localStorage.setItem('ShoppingList', JSON.stringify(val));
	let items = localStorage.getItem('ShoppingList')||"Not Found";
    console.log('shopping list',JSON.parse(items));
}

function removeAllFunc(){
	localStorage.clear();
}



























