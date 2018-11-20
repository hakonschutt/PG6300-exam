import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { setupSocketConnection } from '@actions';
import { requireLoggedInUser } from '@hocs';
import {
	MatchWaitingRoom,
	ActiveMatch,
	MatchResult,
	MatchPause,
} from '@components';

type Props = {
	currentMatch: Object,
	setupSocketConnection: Function,
	history: Object,
	match: Object,
};

class ActiveMatchPage extends Component<Props, *> {
	componentDidMount() {
		const { match, setupSocketConnection, history } = this.props;
		setupSocketConnection(history, match.params.matchId);
	}

	render() {
		const {
			currentMatch: { status },
		} = this.props;

		return (
			<div className="active-game-page">
				<div className="wrap hpad">
					<div className="active-game-page-inner">
						{['pending', 'starting'].includes(status) && <MatchWaitingRoom />}
						{status === 'active' && <ActiveMatch />}
						{status === 'pause' && <MatchPause />}
						{status === 'finished' && <MatchResult />}
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps({ currentMatch }) {
	return { currentMatch };
}

export default connect(
	mapStateToProps,
	{ setupSocketConnection }
)(withRouter(requireLoggedInUser(ActiveMatchPage)));
