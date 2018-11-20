import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getNextQuestion } from '@actions';
import { PlayerScoreList } from '@components';

type Props = {
	currentMatch: Object,
	user: Object,
	getNextQuestion: Function,
};

class MatchPause extends Component<Props, *> {
	componentDidMount() {
		const { user, currentMatch, getNextQuestion } = this.props;
		if (currentMatch.partyLeaderId === user.userId) {
			getNextQuestion();
		}
	}

	render() {
		const { currentMatch } = this.props;

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
	}
}

function mapStateToProps({ currentMatch, user }) {
	return { currentMatch, user };
}

export default connect(
	mapStateToProps,
	{ getNextQuestion }
)(MatchPause);
