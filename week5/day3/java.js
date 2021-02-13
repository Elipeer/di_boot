/*
//random generator
function random(){
	let num = Math.floor(Math.random() * 2); 
	if (num == 1) {
		console.log('heads')
	} else{
		console.log('tails')
	} 
}
random()
//promises
function testNum(num){
	const tester = new Promise((resolve,reject)=>{
		if (num > 10) {
			resolve()
			console.log('resolved')
		}else{
			reject()
		}

	}).catch(()=>{
			console.log('rejected')
		})
}

testNum(15)
testNum(8)
*/
//daily challenge
const arrayOfWords = ['cucumber', 'tomatos', 'avocado']
const complicatedArray = ['cucumber', 44, true]
const makeAllCaps = (array) => {
   return new Promise((resolve, reject) => {
    let capsArray = array.map(word => {
      if(typeof word === 'string'){
        return word.toUpperCase()
      } else {
        reject('Error: Not all items in the array are strings!')
      }
    })
    resolve(capsArray)
  })
}
const sortWords = (array) => {
   return new Promise((resolve, reject) => {
     if(array) {
       resolve(array.sort());
     } else {
       reject('Error: Something went wrong with sorting words.')
     }
  })
}
makeAllCaps(arrayOfWords)
  .then(result => {
    return sortWords(result)
  })
  .then((result) => {
    console.log(result)
  })
  .catch(error => {
    console.log(error)
  })











































