const User = require('../models/User');
const Quiz = require('../models/Quiz');
const Question = require('../models/Question');

const initQuizzes = async (user) => {
  try {
    const quiz = await new Quiz({
      title: 'Pub Quiz',
      ownerId: user.userId,
      published: true
    }).save();

    if (quiz.quizId) {
      await new Question({
        question: 'Which American singer is famous for \'My Way\' and\'Fly Me to the Moon\'?',
        answers: ['Frank Sinatra', 'Louis Armstrong', 'Miles Davis', 'Charlie Parker'],
        correctIndex: 0,
        quizId: quiz.quizId,
        order: 0
      }).save();

      await new Question({
        question: 'Which actor played James Bond in Casino Royale, Skyfall and Spectre?',
        answers: ['Daniel Craig', 'Pierce Brosnan', 'Sean Connery', 'Roger Moore'],
        correctIndex: 0,
        quizId: quiz.quizId,
        order: 1
      }).save();

      await new Question({
        question: 'Which US company is known for the iPhone and Watch?',
        answers: ['Apple', 'Microsoft', 'Samsung', 'Sony'],
        correctIndex: 0,
        quizId: quiz.quizId,
        order: 2
      }).save();
    }
  }
  catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

module.exports = {
  async init() {
    try {
      const oldUser = await User.findAll();

      if (oldUser.length < 1) {
        const user = await new User({
          name: 'John doe',
          email: 'john@doe.no',
          password: 'admin'
        }).save();

        await initQuizzes(user);
      }
    }
    catch (err) {
      console.log('ERROR:', err);
    }
  }
};
