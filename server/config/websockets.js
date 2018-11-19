const http = require('http');
const socketIo = require('socket.io');

const initWebsockets = (app, session) => {
  const server = http.createServer(app);

  const io = socketIo(server, {
    path: '/socket'
  });

  io.use((socket, next) => {
    session(socket.request, socket.request.res, next);
  });

  io.on('connection', async (socket) => {
    console.log(socket.request);

    socket.on('error', (error) => {
      console.log('ERR: ', error);
    });

    socket.on('disconnect', (reason) => {
      console.log('disconnect', reason);
    });
  });

  return server;
};

module.exports = initWebsockets;
