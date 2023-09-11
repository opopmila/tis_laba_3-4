let num = 55;
if (num >= 10 && num <= 90) {
    let sum = Math.floor(num / 10) + num % 10;
	if (sum <= 9) {
		console.log('Сумма цифр однозначна');
	  } else {
		console.log('Сумма цифр двухзначна');
	  }
} else {
	console.log('Число не попадает в диапазон от 10 до 99');
}