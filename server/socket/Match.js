const uuid = require('uuid');
const matches = require('./storage/matches');

class Match {
  constructor({
    id = null,
    title = 'Quiz',
    quizId = null,
    currentQuestion = null,
    partyLeaderId,
    status = 'pending',
    activePlayerIds = []
  }) {
    this.id = id || uuid();
    this.title = title;
    this.quizId = quizId;
    this.currentQuestion = currentQuestion;
    this.partyLeaderId = partyLeaderId;
    this.status = status;
    this.activePlayers = activePlayerIds.map(player => ({
      userId: player.userId,
      name: player.name,
      score: 0
    }));
  }

  save() {
    matches.saveMatch(this);

    return this;
  }

  startGame(userId) {
    if (userId !== this.partyLeaderId) {
      throw new Error('The current user is not the partyleader');
    }

    this.status = 'active';
    matches.saveMatch(this);

    return this;
  }

  addPlayer(player) {
    if (this.status !== 'pending') {
      throw new Error('Could not add player because the game is not pending');
    }

    const obj = { userId: player.userId, name: player.name, score: 0 };
    this.activePlayers = [...this.activePlayers, obj];

    matches.saveMatch(this);

    return this;
  }

  containsPlayer(user) {
    return this.activePlayers.some(player => player.userId === user.userId);
  }

  finishGame() {
    matches.deleteMatch(this.id);

    return null;
  }

  checkIfPlayerHasAccess(id) {
    if (this.status === 'pending') {
      return true;
    }

    return this.activePlayers.some(player => player.id === id);
  }

  static getPendingGames() {
    return matches.getPendingGames();
  }

  static findById(id) {
    return matches.findById(id);
  }
}

module.exports = Match;
