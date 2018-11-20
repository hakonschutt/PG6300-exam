import React from 'react';

type Props = {
	players: Array,
};

const PlayerScoreList = ({ players }: Props) => {
	let i = 1;

	const sortedPlayer = players.sort(
		(pOne, pTwo) =>
			pOne.score < pTwo.score ? 1 : pTwo.score < pOne.score ? -1 : 0
	);

	return sortedPlayer.map(player => {
		return (
			<li className="list-item" key={player.userId}>
				<h5>{i++}</h5>
				<h4>{player.name || 'Unknown'}</h4>
				<h5>{`${player.score} points`}</h5>
			</li>
		);
	});
};

export default PlayerScoreList;
