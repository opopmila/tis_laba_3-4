let obj1 = {a: 1, b: 2, c: 3, d: 4, e: 5};
let obj2 = {};

for (let i in obj1) {
if (obj1[i] % 2 === 0) {
    obj2[i] = obj1[i];
}
}
console.log(obj2);