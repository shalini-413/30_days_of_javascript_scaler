function num_check(x, y) 
  {
  if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99))
  {
    return true;
  } 
  else 
  {
    return false;
  }
}

console.log(num_check(12, 101));
console.log(num_check(52, 80));
console.log(num_check(15, 99));