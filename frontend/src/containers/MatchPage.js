import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AnimateHeight from 'react-animate-height';

import { requireLoggedInUser } from '@hocs';
import { fetchQuizzes, setPopup, setGlobalAlert } from '@actions';
import {
	PageHeader,
	QuizzesCardList,
	MatchStartSelector,
	GamesList,
} from '@components';

type Props = {
	quizzes: Array,
	user: Object,
	setPopup: Function,
	fetchQuizzes: Function,
	setGlobalAlert: Function,
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
		this.props.history.push(`/match/${info.id}`);
	}

	async joinCurrentMatch() {
		try {
			const res = await axios.get('/api/v1/games');

			if (Array.isArray(res.data)) {
				this.setState({
					isSelected: false,
					games: res.data,
				});
			} else {
				this.props.history.push(`/match/${res.data.id}`);
			}
		} catch (err) {
			this.props.setGlobalAlert(
				'There was an error while requesting active game, try again later'
			);
		}
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
							<GamesList
								userId={this.props.user.userId}
								games={games}
								onClick={this.goToGame.bind(this)}
							/>
						</AnimateHeight>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps({ quizzes, user }) {
	return { quizzes, user };
}

export default connect(
	mapStateToProps,
	{ fetchQuizzes, setPopup, setGlobalAlert }
)(withRouter(requireLoggedInUser(MatchPage)));
