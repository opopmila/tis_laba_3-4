let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']; 
let arr2 = [1, 2, 3, 4, 5, 6, 7];
let obj = {};

for (let i = 0; i <= 7; i++) {
	let date = arr1[i];
	let num = arr2[i];
	
	obj[date] = num;
}

console.log(obj);