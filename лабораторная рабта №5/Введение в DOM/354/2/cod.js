let button = document.querySelector('#button');
button.innerHTML = 1;
button.addEventListener('click', function() {
	let value = parseInt(button.innerHTML);
  value += 1;
  button.innerHTML= value;
});