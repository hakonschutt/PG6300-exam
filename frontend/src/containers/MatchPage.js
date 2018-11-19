import React, { Component } from 'react';
import { connect } from 'react-redux';
import AnimateHeight from 'react-animate-height';

import { requireLoggedInUser } from '@hocs';
import { fetchQuizzes, setPopup } from '@actions';
import { PageHeader, QuizzesCardList, MatchStartSelector } from '@components';

type Props = {
	quizzes: Array,
	setPopup: Function,
	fetchQuizzes: Function,
};

class MatchPage extends Component<Props, *> {
	constructor(props) {
		super(props);

		this.state = { isSelected: false };
	}

	goToQuizzesSelect() {
		this.props.fetchQuizzes();
		this.setState({ isSelected: true });
	}

	startQuizGame(info) {
		this.props.setPopup({ component: 'game-starter', info });
	}

	joinCurrentMatch() {
		// TODO: Implement join of current match
	}

	render() {
		const { isSelected } = this.state;

		return (
			<div className="games-page">
				<div className="wrap hpad">
					<div className="games-page-inner">
						<PageHeader title="Start match" />
						<MatchStartSelector
							joinClick={this.joinCurrentMatch.bind(this)}
							createClick={this.goToQuizzesSelect.bind(this)}
							isSelected={isSelected}
						/>
						<AnimateHeight duration={500} height={isSelected ? 'auto' : 0}>
							<div className="quiz-select-header">
								<h2>Select Quiz</h2>
							</div>
							<QuizzesCardList
								quizzes={this.props.quizzes}
								onClick={this.startQuizGame.bind(this)}
							/>
						</AnimateHeight>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps({ quizzes }) {
	return { quizzes };
}

export default connect(
	mapStateToProps,
	{ fetchQuizzes, setPopup }
)(requireLoggedInUser(MatchPage));
