const { parentPort } = require('worker_threads');

parentPort.on('message', (job) => {
  console.log(job)
  for (let j of job) {
    let count = 0;
    for (let i = 0; i < j ; i++) {
      count++;
    }
  }
  parentPort.postMessage('done dona done')
});
