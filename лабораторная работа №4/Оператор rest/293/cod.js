function average(...numbers) {
    if (numbers.length === 0) return 0;
        const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        const average = sum / numbers.length;
        return average;
}
console.log(average(1, 2, 3, 4, 5)); 