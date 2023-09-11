let elems = document.querySelectorAll('input');
function func() {
	this.value = Number(this.value) + 1;
	console.log(this.value);
}
for (let elem of elems) {
	elem.addEventListener('blur', func);
}
//работает не так как надо