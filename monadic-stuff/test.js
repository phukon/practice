const doors = ['red', 'green', 'blue', 'pink', 'yellow', 'teal', 'orange'];

function txfn (d) {
  return [
    `${d} heads`,
    `${d} tails`
  ]
}

function run(input, transform) {
  const newInput = input.map((item) => transform(item));
  return newInput;
}


// const a = run(doors, txfn)
const b = run(doors, txfn)
console.log(b)