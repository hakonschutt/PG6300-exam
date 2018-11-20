import React from 'react';
import { connect } from 'react-redux';

import { PlayerScoreList } from '@components';

type Props = {
	currentMatch: Object,
	user: Object,
};

const MatchPause = ({ currentMatch }: Props) => {
	return (
		<div className="match-score-room">
			<div className="score-info">
				<h1>{currentMatch.title}</h1>
				<div className="players-score">
					<h2>Score</h2>
					<ul>
						<PlayerScoreList players={currentMatch.activePlayers} />
					</ul>
					<div className="next-question">
						<span>Next question is coming...</span>
					</div>
				</div>
			</div>
		</div>
	);
};

function mapStateToProps({ currentMatch }) {
	return { currentMatch };
}

export default connect(mapStateToProps)(MatchPause);
