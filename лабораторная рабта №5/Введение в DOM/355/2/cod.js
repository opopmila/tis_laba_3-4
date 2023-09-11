let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let elem3 = document.querySelector('#elem3');

elem1.addEventListener('focus', func);
elem2.addEventListener('focus', func);
elem3.addEventListener('focus', func);

function func(){
  this.value = this.value * this.value;
}