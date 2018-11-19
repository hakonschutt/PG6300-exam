import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AnimateHeight from 'react-animate-height';

import { requireLoggedInUser } from '@hocs';
import { fetchQuizzes, setPopup } from '@actions';
import {
	PageHeader,
	QuizzesCardList,
	MatchStartSelector,
	GamesList,
} from '@components';

type Props = {
	quizzes: Array,
	setPopup: Function,
	fetchQuizzes: Function,
	history: Object,
};

class MatchPage extends Component<Props, *> {
	constructor(props) {
		super(props);

		this.state = {
			isSelected: false,
			games: [],
		};
	}

	goToQuizzesSelect() {
		this.props.fetchQuizzes();
		this.setState({
			games: [],
			isSelected: true,
		});
	}

	startQuizGame(info) {
		this.props.setPopup({ component: 'game-starter', info });
	}

	goToGame(info) {
		this.props.history.push(`/match/${info.sockerId}`);
	}

	joinCurrentMatch() {
		this.setState({
			isSelected: false,
			games: [
				{
					gameId: 1,
					sockerId: 1,
					title: 'test',
					status: 'Pending',
					waiting: 4,
				},
				{
					gameId: 2,
					sockerId: 2,
					title: 'test',
					status: 'Pending',
					waiting: 4,
				},
				{
					gameId: 3,
					sockerId: 3,
					title: 'test',
					status: 'Pending',
					waiting: 4,
				},
			],
		});
	}

	render() {
		const { isSelected, games } = this.state;

		return (
			<div className="games-page">
				<div className="wrap hpad">
					<div className="games-page-inner">
						<PageHeader title="Start match" />
						<MatchStartSelector
							joinClick={this.joinCurrentMatch.bind(this)}
							createClick={this.goToQuizzesSelect.bind(this)}
							isSelected={
								isSelected
									? 'quiz-is-selected'
									: games.length > 0
										? 'game-is-selected'
										: ''
							}
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
						<AnimateHeight
							duration={500}
							height={games.length > 0 ? 'auto' : 0}
						>
							<div className="game-select-header">
								<h2>Select Game</h2>
							</div>
							<GamesList games={games} onClick={this.goToGame.bind(this)} />
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
)(withRouter(requireLoggedInUser(MatchPage)));
