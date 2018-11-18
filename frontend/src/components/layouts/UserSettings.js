import React from 'react';
import { connect } from 'react-redux';

import { setAside } from '@actions';

type Props = {
	user: Object,
	setAside: Function,
};

const UserSettings = ({ user, setAside }: Props) => {
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
						<a onClick={() => setAside('name-settings')}>Change name</a>
						<a onClick={() => setAside('email-settings')}>Change email</a>
						<a onClick={() => setAside('password-settings')}>Change password</a>
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
	{ setAside }
)(UserSettings);
