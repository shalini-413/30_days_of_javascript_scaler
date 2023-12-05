function* range(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}

// Example usage:
const startValue = 1;
const endValue = 5;
const iterator = range(startValue, endValue);

for (const num of iterator) {
    console.log(num);
}
