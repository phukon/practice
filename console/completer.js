const { createInterface } = require('readline')

async function question(query, options) {
  let completer = undefined
  if (options && Array.isArray(options.choices)) {
    completer = function completer(line) {
      const completions = options.choices
      const hits = completions.filter((c) => c.startsWith(line))
      return [hits.length ? hits : completions, line]
    }
  }

  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true,
    completer,
  })

  return new Promise((resolve) =>
    rl.question(query ?? '', (answer) => {
      rl.close()
      resolve(answer)
    })
  )
}

// Example usage
async function runExample() {
  const choices = ['open', 'close', 'read', 'write']
  const userInput = await question('Enter a command: ', { choices })
  console.log(`You entered: ${userInput}`)
}

// Run the example
runExample()