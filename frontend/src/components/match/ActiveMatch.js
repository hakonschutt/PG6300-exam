import React, { Component } from 'react';
import { connect } from 'react-redux';

import { LargeCountdown, CenteredLoader } from '@components';
import { answerMatchQuestion, goToPausePage } from '@actions';

type Props = {
	currentMatch: Object,
	user: Object,
	fetchNextQuestion: Function,
	goToPausePage: Function,
};

class ActiveMatch extends Component<Props, *> {
	constructor(props) {
		super(props);

		this.state = {
			hasAnswered: false,
		};
		this.refCounter = React.createRef();
	}

	componentWillUnmount() {
		this.props.fetchNextQuestion();
	}

	onAnswerClick(index) {
		if (!this.state.hasAnswered) {
			this.setState({ hasAnswered: true });
			const seconds = this.refCounter.getSeconds();
		}
	}

	onFinish() {
		const { currentMatch, user } = this.props;

		if (currentMatch.partyLeaderId === user.userId) {
			this.props.goToPausePage();
		}

		this.props.goToPausePage();
	}

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
				<LargeCountdown
					onRef={instance => (this.refCounter = instance)}
					seconds={10}
					onFinish={this.onFinish.bind(this)}
				/>
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

export default connect(
	mapStateToProps,
	{ answerMatchQuestion, goToPausePage }
)(ActiveMatch);
