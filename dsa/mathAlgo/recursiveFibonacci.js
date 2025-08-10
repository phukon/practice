function recursiveFibonacci(n) {
  return n < 2 ? n : recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)
}

console.log(recursiveFibonacci(5))

//Big-O for iterative approah --> O(n)
//Big-O for this recursive approach --> O(2^n)