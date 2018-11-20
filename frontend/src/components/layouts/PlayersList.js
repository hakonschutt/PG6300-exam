import React from 'react';

type Props = {
	players: Array,
};

const PlayersList = ({ players }: Props) => {
	let i = 1;

	return players.map(player => {
		return (
			<li className="list-item" key={player.userId}>
				<h5>{i++}</h5>
				<h4>{player.name || 'Unknown'}</h4>
			</li>
		);
	});
};

export default PlayersList;
