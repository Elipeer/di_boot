
//fibinacci sequence
function calc(num){
	let int = []; 
	int[0] = 0;
	int[1] = 1;
	for (i = 2; i < num; i++) {
	  int[i] = int[i - 2] + int[i - 1];
	  
	}
	return int;
}

console.log(calc(16))