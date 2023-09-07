function areAllDigitsOdd(number) {
	let digits = number.toString().split("");
	for (let i = 0; i < digits.length; i++) {
	  if (parseInt(digits[i]) % 2 === 0) {
		return false;
	  }
	}
   return true;
}
console.log(areAllDigitsOdd(135791));