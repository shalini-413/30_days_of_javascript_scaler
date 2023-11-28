function sumArray(numbers) {
    let result = numbers.reduce(function(acc, value) {
        let updatedSum = acc + value;
        return updatedSum;
    }, 0);

    return result;
}

let num = [1, 2, 3, 4, 10];
let sum = sumArray(num);
console.log("Sum of the array: ", sum);
