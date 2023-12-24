/**
  Using the function in stock.ts, write a function that logs in addition to returning the result
  of the operation. The logs should be stored in an array of strings.
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