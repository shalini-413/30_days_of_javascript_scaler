function string_chop(str, size = 1) {
    if (size <= 0) {
      return "Size should be a positive integer.";
    }
    const result = [];
    for (let i = 0; i < str.length; i += size) {
      result.push(str.slice(i, i + size));
    }
    return result;
  }
  // Test cases
  console.log(string_chop('Scaler'));
  console.log(string_chop('Scaler', 2));
  console.log(string_chop('Scaler', 3));
  console.log(string_chop('Shalini', 2));
  