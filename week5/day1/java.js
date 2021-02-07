/*
Write a function called pangrams that will
take one string, s as input.
A pangram is a sentence that contains
every letter of the alphabet.
The goal of this function is to determine
if the sentence given is a pangram or not.
If it is not a pangram, the function will return not pangram.
If it is a pangram,
the function will return pangram. Here is an example:
"The quick brown fox jumps over the lazy dog"
"We promptly judged antique ivory buckles for the prize"
x is missing
*/
/*
var hello = "The quick brown fox jumps over the lazy dog"

//searching for pangrams
function pangram(s){ 
   if (/(?=.*a)(?=.*b)(?=.*c)(?=.*d)(?=.*e)(?=.*f)(?=.*g)(?=.*h)(?=.*i)(?=.*j)(?=.*k)(?=.*l)(?=.*m)(?=.*n)(?=.*o)(?=.*p)(?=.*q)(?=.*r)(?=.*s)(?=.*t)(?=.*u)(?=.*v)(?=.*w)(?=.*x)(?=.*y)(?=.*z)./i.test(s)){
   	console.log('pangram')
   }
   else{
   	console.log('not pangram')
   }
}
pangram(hello);

//another way
const isPangram = (string) => 
     new Set(string.toLowerCase().match(/[a-z]/g)).size === 26;

console.log(isPangram("abcdefghijklmnopqrstuvwxyz"));  //true
console.log(isPangram("The Quick Brown Fox Jumps over the lazy dog")); //true
*/
//database download
//https://www.postgresql.org/

//exersize 3
// let marioGame = {
//   detail : "An amazing game!",
//   characters : {
//       mario : {
//         description:"Small and jumpy. Likes princesses.",
//         height: 10,
//         weight: 3,
//         speed: 12,
//       },
//       bowser : {
//         description: "Big and green, Hates princesses.",
//         height: 16,
//         weight: 6,
//         speed: 4,
//       },
//       princessPeach : {
//         description: "Beautiful princess.",
//         height: 12,
//         weight: 2,
//         speed: 2,
//       }
//   },
// }
// let hello = JSON.stringify(marioGame,null,1)
// let bye = JSON.parse(hello)
// console.log(hello);
// console.log(bye);


  //     const urlParams = new URLSearchParams(window.location.search);
  //     var entries = urlParams.entries();
  //     var str = ""
  //     for(pair of entries) {
  //     	str = str + `${pair[0]} ${pair[1]}`
  //       console.log(pair[0], pair[1]);
  //      // const arr = JSON.parse(pair[1]);
  //      // console.log(arr);

  //     }

  //     let hey =  document.getElementById('hey')
  //     if (hey) {
  //     hey.innerHTML = str
  // }

//daily challenge

      const urlParams = new URLSearchParams(window.location.search);
      var entries = urlParams.entries();
      var str = ""
      for(pair of entries) {
        str = str + `${pair[0]} ${pair[1]}`
        const arr = JSON.stringify(str);
        console.log(arr);
      }






























