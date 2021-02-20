function change(){
	let cont = document.getElementById('container')
	let color = ['red', 'green', 'orange']
	let index = Math.floor(Math.random() * 3);
	for (i in color) {
		
		cont.style.backgroundColor = color[index]
	}
	
	

}
		
	
