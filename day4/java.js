function compare(arr1,arr2){
	let difference = arr1.filter(x => !arr2.includes(x)).concat(arr2.filter(x => !arr1.includes(x)));;
	return difference
	}

console.log(compare([1,2,3,4,5],[3,2,6,7]))