function calculateTotal(numbers) {
    const oddNumbers = numbers.filter(number =>
        number % 2 !== 0
    );
    const squaredNumbers = oddNumbers.map(number =>
        number * number
    );
    const total = squaredNumbers.reduce((accumulator, currentNumber) =>
        accumulator + currentNumber, 0
    );
    return total;
}
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = calculateTotal(numbersArray);
console.log(result);
