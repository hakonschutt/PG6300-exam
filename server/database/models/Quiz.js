class Quiz {
  constructor({ id = null, title, numberOfPlayers = 4 }) {
    this.id = id;
    this.title = title;
    this.numberOfPlayers = numberOfPlayers;
  }
}

module.exports = Quiz;
