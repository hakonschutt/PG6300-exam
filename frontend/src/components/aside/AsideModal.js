import React from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { closeAside } from '@actions';
import ModalBuilder from '@components/aside/ModalBuilder';
import { Cross } from '@assets/images';

const transitionOptions = {
	transitionName: 'aside',
	transitionEnterTimeout: 500,
	transitionLeaveTimeout: 500,
};

// @flow
type Props = {
	aside: String,
	closeAside: Function,
};

const AsideModal = ({ aside, closeAside }: Props) => {
	return (
		<ReactCSSTransitionGroup {...transitionOptions} className="aside-modal">
			{aside && (
				<div className="aside-module">
					<div className="overlay" onClick={closeAside} />
					<div className={`inner ${aside}`}>
						<div className="close-icon" onClick={closeAside}>
							<Cross />
						</div>
						<ModalBuilder aside={aside} />
					</div>
				</div>
			)}
		</ReactCSSTransitionGroup>
	);
};

function mapStateToProps({ aside }) {
	return { aside };
}

export default connect(
	mapStateToProps,
	{ closeAside }
)(AsideModal);
