let elem = document.querySelector('#elem');
let button = document.querySelector('#button');

button.addEventListener('click', function() {
  let text = elem.type;
  console.log(text);
});