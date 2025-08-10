function recursiveFactorial(n) {
  if (n === 0) return 1
  return n * recursiveFactorial(n - 1)
}
const result = recursiveFactorial(6)
console.log(result)
