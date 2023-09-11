let text = document.querySelectorAll('.www');

function func(){
  this.textContent *= this.textContent;
  console.log(this.textContent);
};
for (let elem of text){
  elem.addEventListener('click', func);
}