const Database = require('../Database');
const queries = require('../queries');

class Quiz {
  constructor({ quizId = null, title, numberOfPlayers = 4 }) {
    this.quizId = quizId;
    this.title = title;
    this.numberOfPlayers = numberOfPlayers;
  }

  async save() {
    try {
      const { rows } = await Database.query(
        queries.insertNewQuiz,
        [this.title, this.numberOfPlayers]
      );

      this.quizId = rows[0].quizId;
      return this;
    }
    catch (err) {
      throw new Error('Could not save the quiz');
    }
  }

  async update({ title = null, numberOfPlayers = null }) {
    if (!this.quizId) {
      throw new Error('You need to save the quiz before it can be updated');
    }

    if (!title && !numberOfPlayers) {
      throw new Error('You need to include a title or number of players');
    }

    try {
      if (title) {
        this.title = title;
      }

      if (numberOfPlayers) {
        this.numberOfPlayers = numberOfPlayers;
      }

      await Database.query(
        queries.updateQuiz,
        [this.quizId, this.title, this.numberOfPlayers]
      );

      return this;
    }
    catch (err) {
      throw new Error('Could not update user');
    }
  }

  static async findById(id) {
    try {
      const { rows } = await Database.query(queries.findQuizById, [id]);

      if (rows.length < 1) throw new Error();

      return new Quiz(rows[0]);
    }
    catch (err) {
      throw new Error('Could not find the quiz');
    }
  }

  static async findAll() {
    try {
      const { rows } = await Database.query(queries.findAllQuizzes);
      return rows.map(row => new Quiz(row));
    }
    catch (err) {
      throw new Error('An issu occured. Try again later');
    }
  }

  static async deleteById(id) {
    try {
      const { rows } = await Database.query(queries.deleteQuizById, [id]);
      await Database.query(queries.deleteQuestionByQuizId, [id]);

      return rows[0].quizId === id;
    }
    catch (err) {
      throw new Error('Could not delete quiz');
    }
  }
}

module.exports = Quiz;
