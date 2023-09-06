let arr = [10, 20, 30, 40, 21, 32, 51]; 
for (i = 0; i < arr.length; i++ ) {
	let num = String(arr[i]);
  	let char = num[0];
  	if (char == 1 || char == 2) {
    	console.log(num);
  	}
}