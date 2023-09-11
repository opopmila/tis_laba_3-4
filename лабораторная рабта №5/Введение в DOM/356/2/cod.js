let button = document.querySelector('#button');
let text = document.querySelectorAll('.www');
button.addEventListener('focus', function(){
  let i = 0;
  for (let elem of text){
    elem.textContent = elem.textContent + ++i;
    }
});

