import React from 'react';

type Props = {
	games: Array,
	onClick: Function,
};

const GamesList = ({ games = [], onClick }: Props) => {
	return (
		<div className="games-list">
			<ul>
				{games.map(game => {
					const isClickAble = game.status === 'Pending';

					return (
						<li key={game.gameId} className="list-item">
							<div className="game-info">
								<label>Quiz title</label>
								<h4>{game.title}</h4>
								<label>Status</label>
								<h5>{game.status}</h5>
								<label>People</label>
								<h5>
									{game.waiting}/{game.total}
								</h5>
							</div>
							<a
								className="btn"
								onClick={() => (isClickAble ? onClick(game) : null)}
							>
								Join game
							</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default GamesList;
