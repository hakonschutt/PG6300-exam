const matches = new Map();

exports.saveMatch = match => matches.set(match.id, match);

exports.findById = id => matches.get(id);

exports.getPendingGames = () => Array.from(matches).reduce((previous, [key, value]) => {
  if (value.status === 'pending') {
    previous.push(value);
  }

  return previous;
}, []);

exports.deleteMatch = tokenId => matches.delete(tokenId);
