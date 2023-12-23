// var array = Array.from({ length: 100 }, () => 1e9);
// console.log(array);

const {Worker} = require('worker_threads')

var array = Array.from({ length: 32 }, (_, index) => index + 1);
console.log(array)

let completedWorkers = 0

// splits the array into sub-arrays
function chunkify (arr, n) {
  let chunks = []
  for (let i = n; i > 0; i--) {
    chunks.push(arr.splice(0, Math.ceil(array.length / i)))
  }
  return chunks
}

function run (jobs, concurrentWorkers) {
  const chunks = chunkify(jobs, concurrentWorkers)
  chunks.forEach((data, index) => {
    const worker = new Worker('./worker.js')
    worker.postMessage(data)
    worker.on('message', () => {
      console.log(`Worker ${index + 1} has completed the work!`)
      completedWorkers++
      if (completedWorkers === concurrentWorkers) {
        console.log('done')
        process.exit()
      }
    })
  })
}

run(array, 3)