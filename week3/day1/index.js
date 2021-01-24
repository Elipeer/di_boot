//document.body.firstElementChild.textContent = "bye bye";

// let div1 = document.body.firstElementChild;
// let div2 = document.body.children[0];

// let ul1 = document.body.lastElementChild;
// let ul2 = body.children[1];
// console.log(ul1)
// let li1 = ul1.lastElementChild;
// let li2 = ul1.children[1];

/*
//exersize 1
let body = document.body;
//two ways to change id...
document.getElementById("navBar").id = "socialNetworkNavigation";
body.firstElementChild.setAttribute("id", "socialNetworkNavigation");

//let list = body.getElementsByTagName("ul").innerHTML;
let newLi = document.createElement("li")
let textNode = document.createTextNode('Logout');
newLi.appendChild(textNode);
document.body.children[0].firstElementChild.appendChild(newLi);



exersize 2
let log = document.body.children[1].children[1];
log.innerHTML = "Richard"
console.log(log)


var hel = document.getElementsByTagName("li");
for (i in hel) {
 
	hel[i].innerHTML = "eli"
	console.log(hel)
}

//let list = body.getElementsByTagName("ul").innerHTML;
var newLi = document.createElement("li")

var textNode = document.createTextNode('hey students');
newLi.appendChild(textNode);
var uls = document.getElementsByTagName("ul")
for (var i = 0; i < uls.length; i++) {
	uls[i].appendChild(newLi.cloneNode(true))
}

//exersize 4
let myDiv = document.body.firstElementChild;
myDiv.setAttribute('style', "background-color:blue; padding: 50px;")

let li1 = document.body.children[1].children[0];
console.log(li1)
let li2 = document.body.children[1].children[1];
li1.setAttribute('style', "color: transparent;")
console.log(li2)
li2.setAttribute('style', "border: solid pink 10px;")

document.body.setAttribute('style', "font-size: 50px;")
*/












let planets = ["earth", "mars", "neptune", "jupiter", "saturn", "venus", "uranus", "mercury"];
let colors = ["orange","blue","yellow","red","green","pink","purple","brown"];
let moons = ["1","2","14","79","62","0","27","5"];
let body = document.body;
//gets all children of body
let childs = body.children;
for (i in planets) {
	//create div planets
    var planetArray = document.createElement("div")
    //create text
    var textNode = document.createTextNode(planets[i]);
    //add class attribute
    planetArray.setAttribute('class', i + " planet" )
    //add style attribute
    planetArray.setAttribute('style', `background-color:${colors[i]}`)
    //append the text
    planetArray.appendChild(textNode);
    //append element to body
    body.appendChild(planetArray);

    //create div moons
    var moonArray = document.createElement("div")
    //create text
    var textNode = document.createTextNode(moons[i]);
    //add class attribute
    moonArray.setAttribute('class', i + " moon" )
    //append the text
    moonArray.appendChild(textNode);
    //append element to each element of body (in order)
    childs[i].appendChild(moonArray);

}








