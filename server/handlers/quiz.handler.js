const Quiz = require('../database/models/Quiz');
const Question = require('../database/models/Question');

exports.getQuizzes = async (req, res) => {
  try {
    let quizzes;
    const { current } = req.query;

    if (current) quizzes = await Quiz.findByUserId(req.user.id, req.query);
    else quizzes = await Quiz.findAll(req.query);

    res.status(200).send(quizzes);
  }
  catch (err) {
    res.status(400).send();
  }
};

exports.createQuiz = async (req, res) => {
  try {
    const quiz = await new Quiz(req.body).save();
    res.status(201).send(quiz);
  }
  catch (err) {
    res.status(400).send();
  }
};

exports.updateQuiz = async (req, res) => {
  try {
    let quiz = await Quiz.findById(req.params.id);
    quiz = await quiz.update(req.body);

    res.status(200).send(quiz);
  }
  catch (err) {
    res.status(400).send();
  }
};

exports.deleteQuiz = async (req, res) => {
  try {
    const deleted = await Quiz.deleteById(req.params.id);

    if (deleted) {
      res.status(204).send();
    }
    else {
      res.status(400).send();
    }
  }
  catch (err) {
    res.status(400).send();
  }
};

exports.createQuizQuestion = async (req, res) => {
  try {
    const question = await new Question({ quizId: req.params.id, ...req.body });

    res.status(201).send(question);
  }
  catch (err) {
    res.status(400).send();
  }
};

exports.updateQuizQuestion = async (req, res) => {
  try {
    const question = await Question.findById(req.params.questionId);
    question.update(req.body);

    res.status(200).send();
  }
  catch (err) {
    res.status(400).send();
  }
};
exports.deleteQuizQuestion = async (req, res) => {
  try {
    await Question.deleteById(req.params.questionId);

    res.status(200).send();
  }
  catch (err) {
    res.status(400).send();
  }
};
