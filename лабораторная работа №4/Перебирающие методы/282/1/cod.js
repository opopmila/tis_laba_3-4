let arr = [8, 15, 99, 1, 4];

let check = arr.every(function(elem) {
	if (elem >= 0) {
		return true;
	} else {
		return false;
	}
});

console.log(check);