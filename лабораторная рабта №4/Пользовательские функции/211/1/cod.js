function Numbers(arr) {
	for (let i = 0; i < arr.length; i++) {
    	if (arr[i] % 2 !== 0) {
			return false;
	  }
	}
	return true;
}
const numbers = [2, 4, 6, 8, 10];
console.log(Numbers(numbers)); 