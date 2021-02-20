let startDateC;
let endDateC;
let arr = [];
//localStorage.clear();
function getData(){
	let data = localStorage.getItem('data')||[];
	let newData = JSON.parse(data)
	console.log('myTitle=>',newData);
	newData.forEach(item=>{
	let container = document.getElementById('container');
	let title = document.getElementById('title').value;
	let desc = document.getElementById('description').value
	let dateChoice = document.createElement('div')
	let titleChoice = document.createElement('div')
	let descChoice = document.createElement('div')
	dateChoice.innerHTML = item.title;
	titleChoice.innerHTML = item;
	descChoice.style.display = 'none'
	container.appendChild(titleChoice);
	container.appendChild(descChoice);
	container.appendChild(dateChoice);
	})
}
getData()

function setList(){
	let container = document.getElementById('container');
	let title = document.getElementById('title').value;
	let desc = document.getElementById('description').value
	let dateChoice = document.createElement('div')
	let titleChoice = document.createElement('div')
	let descChoice = document.createElement('div')
	dateChoice.innerHTML = startDateC;
	titleChoice.innerHTML = title;
	descChoice.innerHTML = desc;
	//descChoice.style.display = 'none'
	container.appendChild(titleChoice);
	container.appendChild(descChoice);
	container.appendChild(dateChoice);
	let data = {title,desc,startDateC,endDateC}
	arr.push(data);
	storage()
}

function startDate(event){
	startDateC = new Date(event.target.value);
	console.log(startDateC);
	}

function endDate(event){
	endDateC = new Date(event.target.value);
	console.log(endDateC);
	}

function storage(){

	localStorage.setItem('data', JSON.stringify(arr));

	let data = localStorage.getItem('data')||[];
	let newData = JSON.parse(data)
	console.log('myTitle=>',newData);


	// localStorage.removeItem('myCat');

	// cat = localStorage.getItem('myCat')||"Removed";
	// console.log('myCat=>',cat);
	// localStorage.clear();
	// let obj = {
	//   name:'Someone',
	//   date:'15-02-2021'
}


/*
put everything in local storage
display the description on toggle
*/