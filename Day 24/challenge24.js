function createDebouncedFunction(originalFunction, delay) {
    let timeoutId;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            originalFunction.apply(context, args);
        }, delay);
    };
}
function customFunction() {
    console.log('Debounced function called');
}
const debouncedCustomFunction = createDebouncedFunction(customFunction, 500);
debouncedCustomFunction();
debouncedCustomFunction();
