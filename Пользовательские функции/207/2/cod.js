function func(num) {
	if (num <= 0) {
		return Math.abs(num);
	} else {
		return num ** 2;
	}
}

console.log( func(10) );
console.log( func(-5) );
// 100 - вводим число 10, функция запускается, идет проверка, 10>0, по этому возводит в корень
// 5 - вводим число -5, функция запускается, идет проверка, -5<0, по этому преобразуем его в положительное число