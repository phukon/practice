/*  This particular code will undergo changes
    to make use of Monads.
*/

function square(x: number): number {
  return x * x;
}

function addOne(x: number): number {
  return x + 1;
}

console.log(addOne(square(2)))