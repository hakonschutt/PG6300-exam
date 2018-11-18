import React from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { removeGlobalAlert } from '@actions';
import { Cross } from '@assets/images';

const transitionOptions = {
	transitionName: 'alert',
	transitionEnterTimeout: 500,
	transitionLeaveTimeout: 500,
};

type Props = {
	alert: String,
	removeGlobalAlert: Function,
};

const PageAlert = ({ alert, removeGlobalAlert }: Props) => {
	return (
		<ReactCSSTransitionGroup {...transitionOptions} className="page-alert">
			{alert && (
				<div className="popup-module">
					<h2>{alert}</h2>
					<div className="close-icon" onClick={removeGlobalAlert}>
						<Cross />
					</div>
				</div>
			)}
		</ReactCSSTransitionGroup>
	);
};

function mapStateToProps({ alert }) {
	return { alert };
}

export default connect(
	mapStateToProps,
	{ removeGlobalAlert }
)(PageAlert);
