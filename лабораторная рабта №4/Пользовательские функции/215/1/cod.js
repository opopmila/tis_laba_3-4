let arr = [20, 40, 77, 53];
let sum = 0;
function count() {
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
      
    }return sum;
}
console.log(count())