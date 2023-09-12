function isPrime(n) {
  if (n <= 3) {
    return n > 1 // 2 and 3 are prime, all other values less than or equal to 1 are not prime
  }
  if (n % 2 === 0 || n % 3 === 0) {
    return false // Numbers divisible by 2 or 3 are not prime
  }

  // We start checking from 5 and increment by 6 alternately
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false // Numbers divisible by i or i + 2 are not prime
    }
  }

  return true // If no divisors are found, the number is prime
}

console.log(isPrime(3))
console.log(isPrime(6))
console.log(isPrime(7))
console.log(isPrime(11))

// Big-O = O(sqrt(n))
