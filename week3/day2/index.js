/*
function insert_Row(){
 
     
	var table = document.getElementById("sampleTable");
    // Find a <table> element with id="sampleTable":


	// Create an empty <tr> element and add it to the 1st position of the table:
	var row = table.insertRow(2);

	// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);

	// Add some text to the new cells:
	cell1.innerHTML = "NEW CELL1";
	cell2.innerHTML = "NEW CELL2";

// }

let button = document.getElementById("jsstyle");
button.addEventListener("click", clickFunc);
button.addEventListener("mouseover", clickFunc);
button.addEventListener("mouseout", clickFunc);

function clickFunc(e){
	
    e.target.style.backgroundColor = "red"
}

//exersize 1
 //give all ps in article a class
	let paragraph = document.getElementsByTagName("p");
	for (i of paragraph) {
		i.setAttribute('class', "para_article");
	}
//remove the last p in article
	let article = document.querySelector("article");
	article.lastElementChild.remove();
//create onclick event
	let title = document.querySelector('h1');
	title.addEventListener('click', remove);

	function remove(){
	   title.remove();
	}
 //change font size of title
    title.style.fontSize = "75px";
//get first p
	let firstP = document.querySelector('article > p');
//add onclick reaction
    firstP.addEventListener('click', hide);
//hide the p 
    function hide(){
      firstP.style.display = "none";
   }    

    let form = document.forms;
    let input1 = document.getElementById("uinput")
    input1.addEventListener('input', inputFunc)
    let input2 = document.getElementById("qinput")
    input2.addEventListener('input', inputFunc)
    function inputFunc(event){
	var values = event.target.value;
    console.log(values)
    let table = document.getElementById("table");
    // Find a <table> element with id="sampleTable":
	// Create an empty <tr> element and add it to the 1st position of the table:
	var row = table.insertRow(0);
	// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	// Add some text to the new cells:
	cell1.innerHTML = input1.value;
	cell2.innerHTML = input2.value;
}


//exersize 2
var bold = document.querySelectorAll("strong");

function getBold_items(){
	let bold = document.querySelectorAll("strong");
	console.log(bold);
	
}

//change all bolds to blue
function highlight(){
	for (i of bold)
     i.style.color = "blue";
}


function returnNormal(){
	for(i of bold){
		i.style.color = "black";
	}
}
//add event listners
  for (i of bold){

	i.addEventListener("mouseover", highlight);
	i.addEventListener("mouseout", returnNormal);
}

//excersize3
let buttonForm = document.getElementById("submit");
buttonForm.addEventListener("click", volumeSphere);

function volumeSphere(event){
	event.preventDefault()
	let radiusValue = document.getElementById("radius").value;
	let formula = (4/3) * Math.PI * Math.pow(radiusValue, 3);
	let volumeResult = document.getElementById("volume")
	volumeResult.value = formula
}

*/
//daily challenge


   function libIt() {
   	 let noun = document.getElementById("noun").value;
     let adjective = document.getElementById('adjective').value;
     let name = document.getElementById('person').value;
     let storyDiv = document.getElementById("story");
     storyDiv.innerHTML = `There once was a girl named ${name}.
       ${name} ${adjective} on a different ${noun}.
       That different ${noun} was called the
      ‘awesome ${noun}’. ${name} lived on a
       very small island, her island was ${adjective}.
       Why was her island ${adjective} you ask? Well,
       it was ${adjective} because it was ${adjective} out of 
       ${noun}. Everything on the island was made 
       out of ${noun}, the sky, the ground, the trees
       were ${noun} shaped, the food was like our human food
       but just in ${noun} color. You get the picture. One day 
       ${name} went for a walk and fell and broke her nose. The end.`;
    
    };
        
let libButton = document.getElementById('lib-button');
libButton.addEventListener('click', libIt);













