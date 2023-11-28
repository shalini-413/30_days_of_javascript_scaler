function counter() {
    let count = 0;
    function increment() {
        count++;
        return count;
    }
    return increment;
}
const myCounter = counter();

console.log(myCounter());
console.log(myCounter());
console.log(myCounter());
