const matches = new Map();

exports.saveMatch = match => matches.set(match.id, match);

exports.findById = id => matches.get(id);

exports.getPendingGames = () => Array.from(matches).filter(([key, value]) => value.status === 'pending');

exports.deleteMatch = tokenId => matches.delete(tokenId);
