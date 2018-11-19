import React from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { closePopup } from '@actions';
import { Cross } from '@assets/images';
import ModalBuilder from './ModalBuilder';

const transitionOptions = {
	transitionName: 'popup',
	transitionEnterTimeout: 500,
	transitionLeaveTimeout: 500,
};

type Props = {
	popup: Object,
	closePopup: Function,
};

const PopupModal = ({ popup, closePopup }: Props) => {
	return (
		<ReactCSSTransitionGroup {...transitionOptions} className="popup-modal">
			{popup.component && (
				<div className="popup-module">
					<div className="overlay" onClick={closePopup} />
					<div className={`inner ${popup.component}`}>
						<div className="close-icon" onClick={closePopup}>
							<Cross />
						</div>
						<ModalBuilder popup={popup} />
					</div>
				</div>
			)}
		</ReactCSSTransitionGroup>
	);
};

function mapStateToProps({ popup }) {
	return { popup };
}

export default connect(
	mapStateToProps,
	{ closePopup }
)(PopupModal);
