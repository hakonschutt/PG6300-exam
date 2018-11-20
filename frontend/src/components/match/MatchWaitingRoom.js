import React, { Component } from 'react';
import { connect } from 'react-redux';

import { PlayersList, Countdown } from '@components';

type Props = {
	currentMatch: Object,
	user: Object,
};

class MatchWaitingRoom extends Component<Props, *> {
	startMatch() {
		// TODO: Implement start match
	}

	leaveMatch() {
		// TODO: Implement leave match
	}

	render() {
		const { currentMatch, user } = this.props;

		const isOwner = currentMatch.partyLeaderId === user.userId;

		return (
			<div className="match-waiting-room">
				<div className="waiting-info">
					<h1>Some title</h1>
					<div className="info">
						<div className="game-started">
							<label>Status</label>
							<span>{currentMatch.status}</span>
						</div>
						{currentMatch.status === 'starting' && (
							<div className="time-ticker">
								<label>Starting</label>
								<Countdown interval={1000} seconds={10} />
							</div>
						)}
					</div>
					<div className="players-list">
						<h2>Active players</h2>
						<ul>
							<PlayersList players={currentMatch.activePlayers} />
						</ul>
					</div>
					<div className="btn-wrap">
						<a onClick={this.leaveMatch.bind(this)} className="btn-danger btn">
							Leave match
						</a>
						{isOwner && (
							<a
								onClick={this.startMatch.bind(this)}
								className="btn-positive btn"
							>
								Start match
							</a>
						)}
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps({ currentMatch, user }) {
	return { currentMatch, user };
}

export default connect(mapStateToProps)(MatchWaitingRoom);
