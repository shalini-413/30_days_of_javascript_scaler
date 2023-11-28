function findFirstNegative(arr) {
    let firstNegative = arr.find(function (n) {
        return n < 0;
    });
    return firstNegative;
}
const transaction = [1000, 3000, 4000, 2000, -898, 3800, -4500];
const result = findFirstNegative(transaction);
console.log("first negative number is: ", result);
