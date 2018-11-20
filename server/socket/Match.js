const uuid = require('uuid');
const matches = require('./storage/matches');

const Question = require('../database/models/Question');

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
    this.questionNumber = 1;
    this.questionCount = 0;
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

  async startGame(userId) {
    if (userId !== this.partyLeaderId) {
      throw new Error('The current user is not the partyleader');
    }

    try {
      const count = await Question.countByQuizId(this.quizId);
      this.questionCount = count;

      const question = await Question.getNextQuestion(this.quizId, this.questionNumber);

      this.currentQuestion = { question: question.question, answers: question.answers };

      this.questionNumber = this.questionNumber + 1;
    }
    catch (err) {
      throw new Error('Could not find questions');
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
