import React from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { closePopup } from '@actions';
import ModalBuilder from '@components/popup/ModalBuilder';
import { Cross } from '@assets/images';

const transitionOptions = {
	transitionName: 'popup',
	transitionEnterTimeout: 500,
	transitionLeaveTimeout: 500,
};

const PopupModal = ({ popup, closePopup }) => {
	return (
		<ReactCSSTransitionGroup {...transitionOptions} className="popup-modal">
			{popup && (
				<div className="popup-module">
					<div className="overlay" onClick={closePopup} />
					<div className={`inner ${popup}`}>
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
