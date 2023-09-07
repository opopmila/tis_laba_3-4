let array = ['Он', 'Она', 'Оно'];
let reversedArray = array.map(
	str => str.split('').reverse().join('')
);
console.log(reversedArray);
