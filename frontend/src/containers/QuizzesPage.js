import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchQuizzes, setPopup } from '@actions';
import { PageHeader, QuizzesList, Alert } from '@components';

type Props = {
	quizzes: Object,
	fetchQuizzes: Function,
	setPopup: Function,
};

class QuizzesPage extends Component<Props, *> {
	constructor(props) {
		super(props);

		this.onSingleClick = this.onSingleClick.bind(this);
	}

	componentDidMount() {
		this.props.fetchQuizzes();
	}

	onSingleClick(info) {
		this.props.setPopup({ component: 'start-game', info });
	}

	render() {
		const {
			quizzes: { error, list },
		} = this.props;

		return (
			<div className="landing-page">
				<div className="wrap hpad">
					<div className="options-list">
						<PageHeader title="Quizzes" />
						<Alert error={error} />
						<QuizzesList
							quizzes={list}
							onClick={this.onSingleClick}
							buttonText="Start game"
						/>
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
)(QuizzesPage);
