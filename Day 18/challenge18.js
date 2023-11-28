function doubleValues(arr) {
    const newarr = arr.map(function (n) {
      return 2 * n;
    });
    return newarr;
  }
  
  const arr = [1, 2, 3, 4, 5];
  const doubledArray = doubleValues(arr);
  console.log(doubledArray);
  