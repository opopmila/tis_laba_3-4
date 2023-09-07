var number = 12;
var result = findDivisors(number);
function findDivisors(number) {
	var divisors = [];
	for (var i = 1; i <= number; i++) {
	  if (number % i === 0) {
		divisors.push(i);
	  }
	}
	return divisors;
}
console.log(result); 