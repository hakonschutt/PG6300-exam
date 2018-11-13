class Question {
  constructor({
    id = null, question, answers, correctIndex, quizId, order
  }) {
    this.id = id;
    this.question = question;
    this.answers = answers;
    this.correctIndex = correctIndex;
    this.quizId = quizId;
    this.order = order;
  }
}

module.exports = Question;
