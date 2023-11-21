function memoize(func) {
    const cache = {};
    return function (...args) {
        const key = JSON.stringify(args);
        if (!(key in cache)) {
            console.log(`Computing result for key: ${key}`);
            cache[key] = func.apply(this, args);
        } else {
            console.log(`Retrieving memoized result for key: ${key}`);
        }
        return cache[key];
    };
}
function add(x, y) {
    return x + y;
}
const memoizedAdd = memoize(add);
console.log("Result 1:", memoizedAdd(3, 4));
console.log("Result 2:", memoizedAdd(1, 5));
console.log("Result 1:", memoizedAdd(3, 4));
console.log("Result 2:", memoizedAdd(1, 5));
