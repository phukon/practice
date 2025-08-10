const net = require('node:net');

const server = net.createServer(socket => {
  socket.write('hello bishes')
  socket.on('data', data => {
    console.log(data.toString())
  })
})

server.listen(8080, () => {
  console.log('listening on port 8080')
})