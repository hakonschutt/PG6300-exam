import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { PlayersList, Countdown } from '@components';
import { startMatch } from '@actions';

type Props = {
	currentMatch: Object,
	user: Object,
	startMatch: Function,
};

const MatchWaitingRoom = ({ currentMatch, user, startMatch }: Props) => {
	const isOwner = currentMatch.partyLeaderId === user.userId;

	return (
		<div className="match-waiting-room">
			<div className="waiting-info">
				<h1>{currentMatch.title}</h1>
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
					<Link to="/match" className="btn-danger btn">
						Leave match
					</Link>
					{isOwner &&
						currentMatch.activePlayers.length > 1 && (
						<a onClick={startMatch} className="btn-positive btn">
								Start match
						</a>
					)}
				</div>
			</div>
		</div>
	);
};

function mapStateToProps({ currentMatch, user }) {
	return { currentMatch, user };
}

export default connect(
	mapStateToProps,
	{ startMatch }
)(MatchWaitingRoom);
