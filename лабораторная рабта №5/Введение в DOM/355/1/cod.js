let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
let button3 = document.querySelector('#button3');
let button4 = document.querySelector('#button4');
let button5 = document.querySelector('#button5');

button1.addEventListener('click', func);
button2.addEventListener('click', func);
button3.addEventListener('click', func);
button4.addEventListener('click', func);
button5.addEventListener('click', func);

function func(){
	this.value = this.value + '!';
}