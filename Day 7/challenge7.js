function checkPairFor50(x, y) {
    return x === 50 || y === 50 || x + y === 50;
  }
  
  console.log(checkPairFor50(50, 50));  // true, as one of them is 50
  console.log(checkPairFor50(20, 50));  // true, as one of them is 50
  console.log(checkPairFor50(20, 20));  // false, neither is 50 and their sum is not 50
  console.log(checkPairFor50(20, 30));  // true, as their sum is 50
  