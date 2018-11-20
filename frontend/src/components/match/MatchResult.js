import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { PlayerScoreList } from '@components';

type Props = {
	currentMatch: Object,
};

const MatchResult = ({ currentMatch }: Props) => {
	return (
		<div className="match-score-room">
			<div className="score-info">
				<h1>{currentMatch.title}</h1>
				<div className="players-score">
					<h2>Score</h2>
					<ul>
						<PlayerScoreList players={currentMatch.activePlayers} />
					</ul>
				</div>
				<div className="btn-wrap">
					<Link to="/match" className="btn-positive btn">
						Go back
					</Link>
				</div>
			</div>
		</div>
	);
};

function mapStateToProps({ currentMatch }) {
	return { currentMatch };
}

export default connect(mapStateToProps)(MatchResult);
