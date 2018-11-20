const http = require('http');
const socketIo = require('socket.io');

const User = require('../database/models/User');
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

      /* eslint-disable */
			socket.user = current;
			/* eslint-enable */

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
        const match = await socketActions.getUpdatedMatch(matchId, socket.user);

        io.to(matchId).emit('match_update', match);
      }
      catch (err) {
        io.to(`${socket.id}`).emit('Err', {
          msg: 'The match is active and can not accept more players'
        });
      }

      socket.on('start_match', async () => {
        try {
          const match = Match.findById(matchId);

          if (match) {
            const newMatch = await match.startGame(socket.user.userId);

            io.to(matchId).emit('match_update', newMatch);
          }
        }
        catch (err) {
          io.to(matchId).emit('match_error', { error: 'Could not start match' });
        }
      });

      socket.on('answer_question', async (data) => {
        try {
          const match = Match.findById(matchId);

          if (match) {
            await match.updatePlayerScore(socket.user.userId, JSON.parse(data));
          }
        }
        catch (err) {
          io.to(`${socket.id}`).emit('Err', {
            msg: 'There was an issue processing you answer'
          });
        }
      });

      socket.on('finished_question', () => {
        try {
          const match = Match.findById(matchId);

          if (match) {
            if (match.questionNumber === match.questionCount) {
              match.status = 'finished';
            }
            else {
              match.status = 'pause';
            }

            io.to(matchId).emit('match_update', match);
          }
        }
        catch (err) {
          io.to(matchId).emit('match_error', { error: 'Could not continue game' });
        }
      });

      socket.on('next_question', () => {
        try {
          const match = Match.findById(matchId);

          if (match) {
            const newMatch = match.getNextQuestion();
            newMatch.status = 'active';

            io.to(matchId).emit('match_update', newMatch);
          }
        }
        catch (err) {
          io.to(matchId).emit('match_error', { error: 'Could not continue game' });
        }
      });

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
