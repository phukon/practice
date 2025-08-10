function factorial(n) {
  let product = 1;
  for (; n > 0; n--) {
    product = n * product;
  }
  return product;
}

console.log(factorial(2)); // Outputs 2
console.log(factorial(4)); // Outputs 24
console.log(factorial(8)); // Outputs 40320
