let elem = document.querySelector('#elem');
let button = document.querySelector('#button');

button.addEventListener('click', function() {
  let text = elem.innerHTML;
  console.log(text);
});