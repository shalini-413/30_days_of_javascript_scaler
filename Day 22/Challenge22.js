function deepEqual(obj1, obj2) {
    if (obj1 === obj2) return true;

    if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) return false;
  
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
  
    if (keys1.length !== keys2.length) return false;
  
    return keys1.every(key => keys2.includes(key) && deepEqual(obj1[key], obj2[key]));
  }
  
  const objectA = { a: 1, b: { c: 2, d: [3, 4] } };
  const objectB = { a: 1, b: { c: 2, d: [3, 4] } };
  const objectC = { a: 1, b: { c: 2, d: [3, 4, 5] } };
  
  console.log(deepEqual(objectA, objectB)); // Output: true
  console.log(deepEqual(objectA, objectC)); // Output: false
  