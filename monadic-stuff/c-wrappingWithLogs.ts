/**
  Issues:
  As is evident. It won't work if we do square(square(2)) or addOne(5).
  There will be type mismatch between. We can fix that with a new function
  that acts sort of like a constructor
 */
interface NumberWIthLogs {
  result: number;
  logs: string[];
}

function wrapWithLogs(x: number): NumberWIthLogs {
  return {
    result: x,
    logs: [],
  };
}

// Tweaked version

function square(x: NumberWIthLogs): NumberWIthLogs {
  return {
    result: x.result * x.result,
    logs: [`Squared ${x.result} to get ${x.result * x.result}`],
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

console.log(square(square(wrapWithLogs(2))))