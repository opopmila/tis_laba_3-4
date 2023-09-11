function func() {
	return ['John', 'Smit', 'development', 'programmer', 2000]; 
}

let arr = func();
let [name, surname, department, position, salary] = arr;
console.log(name, surname);