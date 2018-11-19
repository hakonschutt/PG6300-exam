const http = require('http');
const socketIo = require('socket.io');

const initWebsockets = (app) => {
  const server = http.createServer(app);

  const io = socketIo(server, {
    path: '/socket'
  });

  io.on('connection', async (socket) => {
    console.log('SOCKET', socket);
  });

  return server;
};

module.exports = initWebsockets;
