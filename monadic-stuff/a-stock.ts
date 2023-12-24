/**
 * This file demonstrates basic arithmetic operations without using monads.
 * We have simple functions for squaring a number and adding one to a number.
 * @see [GitHub](https://github.com/phukon/practice/tree/main/monadic-stuff)
 */

function square(x: number): number {
  return x * x;
}

function addOne(x: number): number {
  return x + 1;
}

console.log(addOne(square(2)));
export {}; // to get rid of the 'Duplicate function implementation' warning by Typescript
