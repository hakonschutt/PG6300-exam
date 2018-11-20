const Database = require('../Database');
const queries = require('../queries');

class Question {
  constructor({
    questionId = null, question, answers, correctIndex, quizId, order
  }) {
    this.questionId = questionId;
    this.question = question;
    this.answers = answers;
    this.correctIndex = correctIndex;
    this.quizId = quizId;
    this.order = order;
  }

  async save() {
    try {
      const { rows } = await Database.query(queries.insertNewQuestion, [
        this.question,
        this.answers,
        this.correctIndex,
        this.order,
        this.quizId
      ]);

      this.questionId = rows[0].questionId;
      return this;
    }
    catch (err) {
      throw new Error('Could not save the question');
    }
  }

  async update({
    question = null, answers = null, correctIndex = null, order = null
  }) {
    if (!this.questionId) {
      throw new Error('You need to save the qustion before it can be updated');
    }

    if (!question && !answers && !correctIndex && !order) {
      throw new Error('You need to include a qustion, answers, correct index or ordre in quiz');
    }

    try {
      if (question) {
        this.question = question;
      }

      if (answers) {
        this.answers = answers;
      }

      if (question) {
        this.correctIndex = correctIndex;
      }

      if (order) {
        this.order = order;
      }

      await Database.query(queries.updateQuestion, [
        this.questionId,
        this.question,
        this.answers,
        this.correctIndex,
        this.order
      ]);

      return this;
    }
    catch (err) {
      throw new Error('Could not update user');
    }
  }

  static async findById(id) {
    try {
      const { rows } = await Database.query(queries.findQuestionById, [id]);

      if (rows.length < 1) return null;

      return new Question(rows[0]);
    }
    catch (err) {
      throw new Error('Could not find the quiz');
    }
  }

  static async findAll({ limit = 10, offset = 0 }) {
    try {
      const { rows } = await Database.query(queries.findAllQuestions, [limit, offset]);
      return rows.map(row => new Question(row));
    }
    catch (err) {
      throw new Error('An issu occured. Try again later');
    }
  }

  static async findByQuizId(quizId, { limit = 10, offset = 0 }) {
    try {
      const { rows } = await Database.query(queries.findQustionsByQuizId, [quizId, limit, offset]);

      return rows.map(row => new Question(row));
    }
    catch (err) {
      throw new Error('An issue occured. Try again later');
    }
  }

  static async countByQuizId(quizId) {
    try {
      const { rows } = await Database.query(queries.countQuestionByQuizId, [quizId]);

      return rows[0].count;
    }
    catch (err) {
      throw new Error('An issue occured. Try again later');
    }
  }

  static async getNextQuestion(quizId, offset = 0) {
    try {
      const { rows } = await Database.query(queries.findNextQuestion, [quizId, offset]);

      return new Question(rows[0]);
    }
    catch (err) {
      throw new Error('An issue occured. Try again later');
    }
  }

  static async deleteById(id) {
    try {
      const { rows } = await Database.query(queries.deleteQuestionById, [id]);

      return rows[0].questionId === id;
    }
    catch (err) {
      throw new Error('Could not delete quiz');
    }
  }
}

module.exports = Question;
