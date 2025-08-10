function isPowerOfTwoBitwise(n) {
  if (n < 1) return false
  return (n & (n - 1)) === 0
}

console.log(isPowerOfTwoBitwise(1024))
console.log(isPowerOfTwoBitwise(9765767))
console.log(isPowerOfTwoBitwise(67))
console.log(isPowerOfTwoBitwise(8))

// Big-O = O(1)