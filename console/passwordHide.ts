import { createInterface } from 'node:readline'
import read from 'read'

export async function question(
  query?: string,
  options?: { choices: string[]; hideInput: Boolean }
): Promise<string> {
  let completer: ((line: string) => (string | string[])[]) | undefined = undefined
  if (options && Array.isArray(options.choices)) {
    completer = function completer(line: string) {
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

  return new Promise((resolve) => {
    const inputOptions: read.Options = {
      prompt: query,
      silent: options && options.hideInput === true,
    }

    read(
      inputOptions,
      (error: NodeJS.ErrnoException | null, answer: string) => {
        rl.close()
        resolve(answer)
      }
    )
  })
}

async function testing() {
  await question(`Enter password:`, {
    hideInput: true,
    choices: []
  });
}

testing()