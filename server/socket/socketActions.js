const Match = require('../socket/Match');

exports.getUpdatedMatch = async (matchId, player) => {
  try {
    const match = Match.findById(matchId);

    const contains = match.containsPlayer(player);

    if (contains) {
      return match;
    }

    return match.addPlayer(player);
  }
  catch (err) {
    throw new Error('Match is not upen for more entries');
  }
};
