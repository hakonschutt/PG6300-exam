const Match = require('../socket/Match');
const Quiz = require('../database/models/Quiz');

exports.findPendingGames = async (req, res) => {
  try {
    const matches = Match.getPendingGames();

    if (matches.length === 0) {
      const quiz = await Quiz.getRandomQuiz();

      const match = new Match({
        quizId: quiz.quizId,
        partyLeaderId: req.user.userId,
        activePlayerIds: [req.user]
      }).save();

      return res.status(201).send(match);
    }

    const currentUserIsOwner = matches.find(match => match.partyLeaderId === req.user.userId);

    return res.status(200).send(currentUserIsOwner || matches);
  }
  catch (err) {
    console.log(err);
    return res.status(400).send();
  }
};

exports.createNewMatch = async (req, res) => {
  try {
    const match = new Match({
      ...req.body,
      partyLeaderId: req.user.userId,
      activePlayerIds: [req.user]
    }).save();

    return res.status(201).send(match);
  }
  catch (err) {
    return res.status(400).send();
  }
};

exports.checkForGameAccess = async (req, res) => {
  try {
    const match = Match.findById(req.params.token);

    const hasAccess = match.checkIfPlayerHasAccess(req.user.userId);

    if (!hasAccess) {
      throw new Error('User doesn\'t have access');
    }

    return res.status(200).send(match);
  }
  catch (err) {
    return res.status(401).send();
  }
};
