import React from 'react';

type Props = {
	games: Array,
	onClick: Function,
	userId: String,
};

const GamesList = ({ games = [], onClick, userId }: Props) => {
	return (
		<div className="games-list">
			<ul>
				{games.map(game => {
					const isClickAble = game.status === 'pending';
					const isPartyLeader = userId === game.partyLeaderId;

					return (
						<li key={game.id} className="list-item">
							<div className={isPartyLeader ? 'lead-active' : 'lead-inactive'}>
								<span>You{'\''}re lead</span>
							</div>
							<div className="game-info">
								<label>Quiz title</label>
								<h4>{game.title}</h4>
								<label>Status</label>
								<h5>{game.status}</h5>
								<label>People</label>
								<h5>{game.activePlayers.length}</h5>
							</div>
							<a
								className="btn"
								onClick={() => (isClickAble ? onClick(game) : null)}
							>
								{isPartyLeader ? 'Go Back' : 'Join game'}
							</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default GamesList;
