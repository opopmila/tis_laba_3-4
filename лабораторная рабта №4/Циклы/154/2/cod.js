let arr = [1, 2, 3, -4, 5];
let res = 0;
for (const num of arr) {
  if (num < 0) break;
  res += num;
}
console.log(res);