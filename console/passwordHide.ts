import { createInterface, ReadLineOptions } from 'readline'

interface QuestionOptions {
  choices?: string[]
  hideInput?: boolean
}

export async function question(
  query?: string,
  options?: QuestionOptions
): Promise<string> {
  let completer: ((line: string) => (string | string[])[]) | undefined
  if (options && options.choices && Array.isArray(options.choices)) {
    completer = function completer(line: string) {
      const completions = options.choices!
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

  return new Promise((resolve) => {
    if (options?.hideInput) {
      let password = ''
      process.stdout.write(query ?? '')
      rl.on('keypress', (character, key) => {
        if (key && key.name === 'return') {
          process.stdout.write('\n')
          rl.removeAllListeners('keypress')
          rl.close()
          resolve(password)
        } else {
          password += character
          process.stdout.write('*')
        }
      })
    } else {
      rl.question(query ?? '', (answer) => {
        rl.close()
        resolve(answer)
      })
    }
  })
}

async function runExample() {
  // Ask a regular question without hiding input
  const regularAnswer = await question('What is your name? ')
  console.log(`Regular answer: ${regularAnswer}`)

  // Ask a question with hidden input (password)
  const passwordAnswer = await question('Enter your password: ', {
    hideInput: true,
  })
  console.log(`Password answer: ${passwordAnswer}`)

  // Ask a question with choices
  const choices = ['Option 1', 'Option 2', 'Option 3']
  const choiceAnswer = await question('Choose an option: ', { choices })
  console.log(`Chosen option: ${choiceAnswer}`)
}

// Run the example
runExample()
