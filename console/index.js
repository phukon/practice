const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const pty = require('node-pty');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Serve your static files (HTML, CSS, JS)
app.use(express.static('public'));

wss.on('connection', (ws) => {
  const term = pty.spawn('bash', [], {
    name: 'xterm-256color',
    cols: 80,
    rows: 30,
    cwd: this.cwd,
    env
  });

  term.on('data', (data) => {
    ws.send(data.toString());
  });

  ws.on('message', (msg) => {
    term.write(msg);
  });

  ws.on('close', () => {
    term.kill();
  });
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
