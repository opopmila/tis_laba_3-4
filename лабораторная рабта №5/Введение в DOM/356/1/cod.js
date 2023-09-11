let button = document.querySelector('#button');
let text = document.querySelectorAll('.www')
button.addEventListener('click', function(){
	for (let elem of text){
	elem.textContent = 'go';
	console.log(elem);}
});