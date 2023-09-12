function fibonacci(n) {
  const fib = [0, 1]
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2]
  }
  return fib
}

console.log(fibonacci(10))

// Big-O = O(n)
function rFib(n) {
  if (n < 0) {
    // Handle negative input if needed
    return -1; // or throw an error, depending on your requirements
  } else if (n <= 1) {
    return n; // Base case: Fibonacci of 0 is 0, and Fibonacci of 1 is 1
  } else {
    // Recursive case: Fibonacci of n is the sum of Fibonacci(n-1) and Fibonacci(n-2)
    return rFib(n - 1) + rFib(n - 2);
  }
}

console.log(rFib(5)); // Should return 5th Fibonacci number, which is 5


function tfibonacci(t) {
  if (t < 0) {
    // Handle negative input if needed
    return -1; // or throw an error, depending on your requirements
  } else if (t <= 1) {
    return t; // Base case: Fibonacci of 0 is 0, and Fibonacci of 1 is 1
  } else {
    // Recursive case: Fibonacci of n is the sum of Fibonacci(n-1) and Fibonacci(n-2)
    return tfibonacci(t - 1) + tfibonacci(t - 2);
  }
}

console.log(tfibonacci(5)); // Should return 5th Fibonacci number, which is 5



// function rFib(n) {
//   if ( n === 0 ) return 0
//   else if (n ===1) return 1
//   else return rFib(n - 1) + rFib(n - 2)
// }

// console.log(rFib(5))

// function tfibonacci(t) {
//   if (t === 0) {
//     return 0; // Base case 1: Fibonacci of 0 is 0
//   } else if (t === 1) {
//     return 1; // Base case 2: Fibonacci of 1 is 1
//   } else {
//     // Recursive case: Fibonacci of n is the sum of Fibonacci(n-1) and Fibonacci(n-2)
//     return tfibonacci(t - 1) + tfibonacci(t - 2);
//   }
// }

// // Example usage:
// const t = 5;
// const result = tfibonacci(t);
// console.log(`The ${t}th Fibonacci number is ${result}`);
