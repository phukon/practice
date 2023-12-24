/**
 * Issues:
 * As evident, the previous implementation faces limitations with nested operations like square(square(2)) or addOne(5),
 * resulting in type mismatches. We aim to resolve this issue with a new function that acts as a constructor-like wrapper.
 * This wrapper function encapsulates the input within the 'NumberWithLogs' structure to facilitate nested operations.
 * @see [GitHub](https://github.com/phukon/practice/tree/main/monadic-stuff) 
*/

// Interface to hold both the result and logs
interface NumberWithLogs {
  result: number;
  logs: string[];
}

/**
 * Constructs a 'NumberWithLogs' object by wrapping a numerical value.
 * @param x The number to be wrapped within 'NumberWithLogs'.
 * @returns A 'NumberWithLogs' object initialized with the input number and an empty log array.
 */
function wrapWithLogs(x: number): NumberWithLogs {
  return {
    result: x,
    logs: [],
  };
}

// Tweaked versions of square and addOne functions to operate on NumberWithLogs

/**
 * Computes the square of a 'NumberWithLogs' and records the operation in logs.
 * @param x The 'NumberWithLogs' object whose result will be squared.
 * @returns A 'NumberWithLogs' object with the squared result and updated logs.
 */
function square(x: NumberWithLogs): NumberWithLogs {
  return {
    result: x.result * x.result,
    logs: [`Squared ${x.result} to get ${x.result * x.result}`],
  };
}

/**
 * Adds one to the 'NumberWithLogs' result and logs the operation.
 * @param x The 'NumberWithLogs' object to which one will be added.
 * @returns A 'NumberWithLogs' object with the incremented result and updated logs.
 */
function addOne(x: NumberWithLogs): NumberWithLogs {
  return {
    result: x.result + 1,
    logs: x.logs.concat([
      `Added 1 to ${x.result} to get the result ${x.result + 1}`,
    ]),
  };
}

// Displaying the result of square(square(wrapWithLogs(2)))
console.log(square(square(wrapWithLogs(2))));

// Export to avoid 'Duplicate function implementation' warning by Typescript
export {};
