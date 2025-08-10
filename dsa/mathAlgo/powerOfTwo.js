function isPowerOfto(n) {
  if (n < 1) {
    return console.log("it's not valid")
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false
    }
    n = n / 2
  }
  return true
}

console.log(isPowerOfto(9))
console.log(isPowerOfto(1024))
console.log(isPowerOfto(5))

// Big-O = O(log(n))
