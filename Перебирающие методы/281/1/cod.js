let arr = [15, 2, -11, 88, 9, -5, -72]; 
let res = arr.filter(function(elem) {
	if (elem >= 0) {
		return true;
	} else {
		return false;
	}
});
console.log(res);