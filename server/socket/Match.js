const uuid = require('uuid');
const matches = require('./storage/matches');

class Match {
  constructor({
    id = null,
    title = 'Quiz',
    quizId = null,
    partyLeaderId,
    status = 'pending',
    activePlayerIds = []
  }) {
    this.id = id || uuid();
    this.title = title;
    this.quizId = quizId;
    this.partyLeaderId = partyLeaderId;
    this.status = status;
    this.activePlayers = activePlayerIds.map(userId => ({
      id: userId,
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

  addPlayer(id) {
    if (this.status !== 'pending') {
      throw new Error('Could not add player because the game is not pending');
    }

    const obj = { id, score: 0 };
    this.activePlayers = [...this.activePlayers, obj];

    matches.saveMatch(this);

    return this;
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
