import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Countdown, CenteredLoader } from '@components';

type Props = {
	currentMatch: Object,
	user: Object,
};

class ActiveMatch extends Component<Props, *> {
	onAnswerClick() {}

	renderQuestion() {
		const {
			currentMatch: { currentQuestion },
		} = this.props;

		if (!currentQuestion) {
			return <CenteredLoader />;
		}

		return (
			<div className="current-question">
				<div className="question">
					<h2>{currentQuestion.question}</h2>
				</div>
				<div className="answers">
					<ul>
						{currentQuestion.answers.map((answers, index) => (
							<li key={index} className={`list-item item-${index}`}>
								<a onClick={this.onAnswerClick.bind(this)}>
									<span>{answers}</span>
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		);
	}

	render() {
		const { currentMatch, user } = this.props;

		const userScore = currentMatch.activePlayers.find(
			usr => user.userId === usr.userId
		);

		return (
			<div className="match-active-room">
				<div className="quiz-info">
					<h1>{currentMatch.title}</h1>
					<div className="user-score">
						<h3>Your score: {userScore ? userScore.score : 'Undefined'}</h3>
					</div>
					<div className="quiz">{this.renderQuestion()}</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps({ currentMatch, user }) {
	return { currentMatch, user };
}

export default connect(mapStateToProps)(ActiveMatch);
