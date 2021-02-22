//gold exersize

const func = ()=>{
let today = new Date();
let anotherDay = new Date(2022,1,1, 12)
let diff = anotherDay - today;
let days = diff / (1000 * 60 * 60 * 24);
//console.log('days',days);
return days
}
 module.exports = {
 	func: func
 }