const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true,
})

rl.input.on('keypress', (_, key) => {
  console.log(`Key pressed: ${key.name}`)
  console.log(`Key sequence: ${key.sequence}`)
})

// Listen for input
rl.prompt()
