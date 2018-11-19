const Match = require('../socket/Match');

exports.findPendingGames = async (req, res) => {
  try {
    const matches = Match.getPendingGames();

    if (matches.length === 0) {
      const match = new Match({
        partyLeaderId: req.user.userId,
        activePlayerIds: [req.user.userId]
      }).save();

      return res.status(201).send(match);
    }

    return res.status(200).send(matches);
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

exports.startGame = async (req, res) => {
  try {
    Match.findById(req.params.token).startGame();

    return res.status(200).send();
  }
  catch (err) {
    return res.status(401).send();
  }
};
