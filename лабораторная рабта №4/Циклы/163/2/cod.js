let num = 17;
let result = isPrime(num);
function isPrime(number) {
	if (number <= 1) {
	  return false;
	}
	for (let i = 2; i <= Math.sqrt(number); i++) {
	  if (number % i === 0) {
		return false;
	  }
	}
	
	return true;
}
console.log(result);