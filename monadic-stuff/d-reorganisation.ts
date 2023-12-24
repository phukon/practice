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

function square(x: NumberWIthLogs): NumberWIthLogs {
  const newNumberWithLogs = {
    result: x.result * x.result,
    logs: [`Squared ${x.result} to get ${x.result * x.result}`],
  };
  return {
    result: newNumberWithLogs.result,
    logs: x.logs.concat(newNumberWithLogs.logs),
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

console.log(addOne(square(addOne(wrapWithLogs(5)))));

// The runWithLogs function

function runWithLogs () {
  
}

export {}; // to get rid of the 'Duplicate function implementation' warning by Typescript
