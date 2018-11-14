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

  }
  catch (err) {
    res.status(400).send();
  }
};

exports.updateQuiz = async (req, res) => {};
exports.deleteQuiz = async (req, res) => {};
exports.createQuizQuestion = async (req, res) => {};
exports.updateQuizQuestion = async (req, res) => {};
exports.deleteQuizQuestion = async (req, res) => {};
