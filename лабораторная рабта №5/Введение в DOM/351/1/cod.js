let button = document.querySelector('#button');
button.addEventListener('click', readClass);

function readClass() {
  let elem = document.querySelector('#elem');
  console.log(elem.className);
}
