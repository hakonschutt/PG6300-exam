const http = require('http');
const socketIo = require('socket.io');

const User = require('../database/models/User');

const initWebsockets = (app, session) => {
  const server = http.createServer(app);

  const io = socketIo(server, {
    path: '/api/socket'
  });

  io.use((socket, next) => {
    session(socket.request, socket.request.res, next);
  });

  io.use(async (socket, next) => {
    try {
      const { user } = socket.request.session.passport;

      const current = await User.findById(user);
      socket.user = current;

      next();
    }
    catch (err) {
      next();
    }
  });

  io.on('connection', async (socket) => {
    const { matchId } = socket.handshake.query;

    if (matchId) {
      socket.join(matchId);

      socket.to(matchId).emit('new_user', socket.user);

      socket.on('answer_question', (answer) => {});

      socket.on('next_question', () => {});

      socket.on('finish_game', () => {});

      socket.on('start_game', () => {});

      socket.on('disconnect', () => {
        // TODO: Remove from match!
        socket.to(matchId).emit('user_leave', socket.user);
      });

      socket.on('error', (error) => {
        console.log('ERR: ', error);
      });
    }
  });

  return server;
};

module.exports = initWebsockets;
