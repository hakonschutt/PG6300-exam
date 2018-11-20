const http = require('http');
const socketIo = require('socket.io');

const Match = require('../socket/Match');
const socketActions = require('../socket/socketActions');

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

      try {
        const match = socketActions.getUpdatedMatch(matchId, socket.user);

        socket.to(matchId).emit('match_update', match);
      }
      catch (err) {
        io.to(`${socket.id}`).emit('Err', {
          msg: 'The match is active and can not accept more players'
        });
      }

      socket.to(matchId).emit('new_user', socket.user);

      socket.on('answer_question', (answer) => {});

      socket.on('next_question', () => {});

      socket.on('finish_game', () => {});

      socket.on('start_game', () => {});

      socket.on('disconnect', () => {
        socket.to(matchId).emit('user_leave', socket.user);
      });

      socket.on('error', (error) => {
        console.log('ERR: ', error);
      });
    }
    else {
      io.to(`${socket.id}`).emit('Err', { msg: 'You are missing a match token' });
    }
  });

  return server;
};

module.exports = initWebsockets;
