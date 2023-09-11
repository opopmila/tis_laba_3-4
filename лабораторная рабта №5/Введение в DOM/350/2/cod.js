let elem = document.querySelector('#elem');
elem.addEventListener('blur', function() {
  let number = parseInt(elem.value);
  let square = number ** 2;
  elem.value = square;
});