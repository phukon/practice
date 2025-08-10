const fs = require('fs');

const read = fs.createReadStream('./file.txt', { highWaterMark: 1 });
var count = 0;
var stop = false;
read.on('data', (chunk) => {
  count === 1 ? (stop = true) : (stop = false);
  if (stop) {
    read.pause();
    setTimeout(() => {
      read.resume();
    }, 3000);
  }
  console.log('got a chunk!! ', chunk);
  count += 1;
});

read.on('end', () => {
  console.log('Finished streaming with count', count);
});

const write = fs.createWriteStream('./new-file.txt')
write.write('yoooo')
write.end()