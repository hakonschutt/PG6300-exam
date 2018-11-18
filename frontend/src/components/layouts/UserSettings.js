import React from 'react';
import { connect } from 'react-redux';

import { setPopup } from '@actions';

type Props = {
	user: Object,
	setPopup: Function,
};

const UserSettings = ({ user, setPopup }: Props) => {
	return (
		<div className="user-settings">
			<div className="flex-settings">
				<div className="header-wrap">
					<h2>User</h2>
				</div>
				<div className="flex-settings-inner user-setting">
					<div className="info">
						<span>Name: {user.name}</span>
						<span>Email: {user.email}</span>
						<span>Password: ******</span>
					</div>
					<div className="button-wrap">
						<a onClick={() => setPopup('name-settings')}>Change name</a>
						<a onClick={() => setPopup('email-settings')}>Change email</a>
						<a onClick={() => setPopup('password-settings')}>Change password</a>
					</div>
				</div>
			</div>
		</div>
	);
};

function mapStateToProps({ user }) {
	return { user };
}

export default connect(
	mapStateToProps,
	{ setPopup }
)(UserSettings);
