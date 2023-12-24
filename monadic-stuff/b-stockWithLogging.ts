/**
 * This file refactors the previous code by introducing a structure that holds both
 * the numerical result and an array of logs. This step is a precursor to implementing
 * a monadic pattern to manage computation and logging.
 *
 * The 'NumberWithLogs' interface encapsulates the result and log array.
 *
 * Functions:
 * - 'square': Computes the square of a number and records the operation in logs.
 * - 'addOne': Adds one to the input 'NumberWithLogs' and logs the operation.
 *
 * Console log demonstrates the usage of 'addOne' on the square of 3.
 * @see [GitHub](https://github.com/phukon/practice/tree/main/monadic-stuff)
 */

interface NumberWIthLogs {
  result: number;
  logs: string[];
}

function square(x: number): NumberWIthLogs {
  return {
    result: x * x,
    logs: [`Squared ${x} to get ${x * x}`],
  };
}

function addOne(x: NumberWIthLogs): NumberWIthLogs {
  return {
    result: x.result + 1,
    logs: x.logs.concat([
      `Added 1 to ${x.result} to get the result ${x.result + 1}`,
    ]),
  };
}

console.log(addOne(square(3)));
export {}; // to get rid of the 'Duplicate function implementation' warning by Typescript
