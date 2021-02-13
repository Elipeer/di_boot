/*
A teacher has created a gradeLabs function
that verifies if student programming labs work.
This function loops over an array of JavaScript objects
that should contain a student property and runLab property.

The runLab property is expected to be a function containing
the student's code.
The runLab function is called and the result is compared
to the expected result.
If the result and expected result don't match,
then the lab is considered a failure.
*/
/*  3 */
/*  27 */
/*
let labsdata = [
   {
      student: 'Carly',
      runLab: function (num) {
         return Math.pow(num, num);
      }
   },
   {
      student: 'Erica',
      runLab: function (num) {
         return num * num;
      }
   }
];

let studentLabs2 = [
   {
      student: 'Blake',
      myCode: function (num) {
         return Math.pow(num, num);
      }
   },
   {
      student: 'Jessica',
      runLab: function (num) {
         return Math.pow(num, num);
      }
   },
   {
      student: 'Mya',
      runLab: function (num) {
         return num * num;
      }
   }
];


function checker(datas){
	const data = datas.forEach((item)=>{
		let runner = item.runLab(3);
		console.log(runner)
		if (runner === 27) {
			console.log(item.student + true)
		}else{
			console.log(item.student + false)
		}
	})
	
}

checker(studentLabs2)
*/
/*
let xhr = new XMLHttpRequest();

//Example
xhr.open('GET', 'https://zivuch.github.io/data.json');
xhr.responseType = 'json'
xhr.send()

xhr.onload = function() {
  console.log(xhr.response);
};

xhr.onerror = function() { // only triggers if the request couldn't be made at all
  alert(`Network Error`);
};


if (xhr.status === 200) {
    // Perfect!
} else {

    // There was a problem with the request.
    // For example, the response may have a 404 (Not Found)
    // or 500 (Internal Server Error) response code.
}
*/
/*
//set type to document
function loadXml(xmlDoc) {
      var cd = xmlDoc.getElementsByTagName("email");
      for (let i = 0; i <cd.length; i++) {
          console.log(cd[i].getElementsByTagName("to")[0].childNodes[0].nodeValue);
          console.log(cd[i].getElementsByTagName("from")[0].childNodes[0].nodeValue);
      }
}
*/

// const data = null;

// const xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

// xhr.addEventListener("readystatechange", function () {
//   if (this.readyState === this.DONE) {
//     console.log(this.responseText);
//   }
// });

// xhr.open("GET", "https://instagram47.p.rapidapi.com/get_user_id?username=elipeer98");
// xhr.setRequestHeader("x-rapidapi-key", "42e592d5camsh7e9b4a1d28dd46ep1d77e1jsnb98e7c071d58");
// xhr.setRequestHeader("x-rapidapi-host", "instagram47.p.rapidapi.com");

// xhr.send(data);
/*
const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://instagram47.p.rapidapi.com/email_and_details?userid=239725893");
xhr.setRequestHeader("x-rapidapi-key", "42e592d5camsh7e9b4a1d28dd46ep1d77e1jsnb98e7c071d58");
xhr.setRequestHeader("x-rapidapi-host", "instagram47.p.rapidapi.com");
let arr = [...xhr.responseText];

const private = arr.map((item)=>{
  item.is_private = false;

})
console.log(private)
xhr.send(data);

*/

let xhr = new XMLHttpRequest();

xhr.onload = function() {

    console.log(xhr.response);
 };

xhr.onerror = function() { // only triggers if the request couldn't be made at all
  alert(`Network Error`);
}


if (xhr.status === 200) {
    // Perfect!
} else {
    // There was a problem with the request.
    // For example, the response may have a 404 (Not Found)
    // or 500 (Internal Server Error) response code.
}

function filterSearch(arr){
  var input = document.getElementById('myInput').value;
  xhr.open('GET', `https://api.giphy.com/v1/gifs/search?q=${input}&api_key=brug4vIdI1cA05tJiYGd1I2LwuKaddRi&limit=20`);
  xhr.responseType = 'json'
  xhr.send()
  looper()

}



function looper(){

  setTimeout(function(){ 
  
    let obj = [xhr.response]
    const map1 = obj.forEach((item,num)=>{
  
      console.log(num)
    let img = document.createElement('img')
    img.setAttribute('src', `https://media2.giphy.com/media/${item.data[num].id}/giphy.gif`)
    document.body.appendChild(img)
    console.log(item.data[num])

    })
   }, 1000);
}


















