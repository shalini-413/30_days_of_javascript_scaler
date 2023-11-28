function filterOutOdd(numbers) {
    return numbers.filter(function(n) {
        return n % 2 === 0;
    });
}

let numbers = [1, 2, 20, 35, 12, 17, 46];
let result = filterOutOdd(numbers);

console.log(result);
