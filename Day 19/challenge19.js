function allPositive(numbers) {
    return numbers.every(function(n) {
        return n > 0;
    });
}

const transaction1 = [-1000, -3000, -4000, -2000, -898, -3800, -4500];
const resultEvery1 = allPositive(transaction1);
console.log(resultEvery1);

const transaction2 = [1000, 3000, 4000, 2000, 898, 3800, 4500];
const resultEvery2 = allPositive(transaction2);
console.log(resultEvery2);
