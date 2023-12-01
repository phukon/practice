const dgram = require('node:dgram');
const server = dgram.createSocket('udp4');

server.on('message', (msg, senderInfo) => {
  console.log(`server got: ${msg} from ${senderInfo.port}`)
})

server.bind(8081, () => {
  console.log('opened udp port at 8081')
})