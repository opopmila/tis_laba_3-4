function func(num1 = 0, num2 = 0) {
	console.log(num1 + num2);
}
func(2, 3); //5
func(3); //3
func(); //0