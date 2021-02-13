async function press(){
  const response = await fetch(`http://www.apilayer.net/api/list?access_key=075d15d60a95b06528ad8d5812e3d35e&format=1`)
  const data = await response.json()
  console.log(data)
  createFromList(data)
  createToList(data)
}
press()

let endpoint = 'live'
let access_key = '075d15d60a95b06528ad8d5812e3d35e';
let amount = 20;

async function press1(){
  const response = await fetch(`https://api.currencylayer.com/${endpoint}?access_key=${access_key}`)
  const data = await response.json()
  console.log(data)

}



async function calculate(){
  const response = await fetch(`'https://api.currencylayer.com/${endpoint}?access_key=${access_key}&from=${from}&to=${to}&amount=${amount}`)
  const data = await response.json()
  console.log(data)
  

}
	let fromList = document.getElementById('fromList')
	let toList = document.getElementById('toList')

function createFromList(obj){
    Object.entries(obj.currencies).forEach(item=>{
    	console.log(item)
    	let newOptions = document.createElement('option');
    	newOptions.innerHTML = item;
    	fromList.appendChild(newOptions);

    })
 
}

const from = function () {
    let selectedValue = fromList.options[fromList.selectedIndex].value;
    console.log(selectedValue);
    return selectedValue;
   }


function createToList(obj){
    Object.entries(obj.currencies).forEach(item=>{
    	console.log(item)
    	let newOptions = document.createElement('option');
    	newOptions.innerHTML = item;
    	toList.appendChild(newOptions);

    })
 
}

const to = function () {
    let selectedValue = toList.options[toList.selectedIndex].value;
    console.log(selectedValue);
    return selectedValue;
    console.log(to)

   }   