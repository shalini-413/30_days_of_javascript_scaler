const originalObject = {
    name: 'Shalini',
    state: 'New Delhi'
};
const loggingProxy = new Proxy(originalObject, {
    get: function (target, property, receiver) {
        console.log(`Accessed property: ${property}`);
        return Reflect.get(target, property, receiver);
    }
});
console.log(loggingProxy.name);
console.log(loggingProxy.state);
