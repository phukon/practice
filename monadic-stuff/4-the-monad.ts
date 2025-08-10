/**
 * This file showcases the implementation of a monadic pattern using the higher-order function 'runWithLogs'.
 *
 * Interface:
 * 'NumberWithLog' encapsulates the result and logs array.
 *
 * Functions:
 * - 'wrapWithLogs': Constructs a 'NumberWithLog' object wrapping a numerical value.
 * - 'square': Computes the square of a number and records the operation in logs.
 * - 'addOne': Adds one to a number and logs the operation.
 * - 'runWithLogs': A monadic function that operates on 'NumberWithLog' objects by executing a transformation
 *    using a provided function and logs the operations performed.
 *
 * Explanation:
 * This file addresses the limitations of the previous code when dealing with nested operations like
 * square(square(2)) or addOne(5) due to type mismatches. Initially, attempts to modify 'square' and 'addOne'
 * functions to accept 'NumberWithLog' resulted in making the original functions obsolete.
 *
 * The brilliance of this solution lies in the introduction of the monadic approach through the 'runWithLogs' function.
 * By implementing this higher-order function, the code no longer requires modifications to the existing functions.
 * 'runWithLogs' accepts a 'NumberWithLog' object and a transformation function, facilitating the chaining of
 * operations while preserving logs. This elegant implementation adheres to the monadic pattern,
 * offering improved flexibility, maintainability, and resolving the type mismatch issue.
 *
 * Console log demonstrates the usage of 'runWithLogs' function to chain 'addOne' and 'square'
 * operations on a 'NumberWithLog' object initialized with value 2.
 *
 * @see [GitHub](https://github.com/phukon/practice/tree/main/monadic-stuff)
 */

interface NumberWithLog {
  result: number;
  logs: string[];
}

/**
 * Constructs a 'NumberWithLog' object by wrapping a numerical value.
 * @param x The number to be wrapped within 'NumberWithLog'.
 * @returns A 'NumberWithLog' object initialized with the input number and an empty log array.
 */
function wrapWithLogs(x: number): NumberWithLog {
  return {
    result: x,
    logs: [],
  };
}

/**
 * Computes the square of a number and records the operation in logs.
 * @param x The number whose square is computed.
 * @returns A 'NumberWithLog' object with the squared result and updated logs.
 */
function square(x: number): NumberWithLog {
  return {
    result: x * x,
    logs: [`Squared ${x} to get ${x * x}`],
  };
}

/**
 * Adds one to a number and logs the operation.
 * @param x The number to which one will be added.
 * @returns A 'NumberWithLog' object with the incremented result and updated logs.
 */
function addOne(x: number): NumberWithLog {
  return {
    result: x + 1,
    logs: [`Added 1 to ${x} to get the result ${x + 1}`],
  };
}

/**
 * Executes a transformation on a 'NumberWithLog' object using the provided function
 * and logs the operations performed.
 * @param input The 'NumberWithLog' object to transform.
 * @param transform The transformation function to apply to the 'NumberWithLog' object.
 * @returns A 'NumberWithLog' object after applying the transformation and logging the operations.
 */
function runWithLogs(
  input: NumberWithLog,
  transform: (x: number) => NumberWithLog
): NumberWithLog {
  const newNumberWithLog = transform(input.result);
  return {
    result: newNumberWithLog.result,
    logs: input.logs.concat(newNumberWithLog.logs),
  };
}

// Example usage of 'runWithLogs' function to chain operations on 'NumberWithLog' object
const a = wrapWithLogs(2);
const b = runWithLogs(a, addOne);
const c = runWithLogs(b, square);
console.log(c);

// Export to avoid 'Duplicate function implementation' warning by Typescript
export {};
