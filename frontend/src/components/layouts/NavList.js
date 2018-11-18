import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

type Props = {
	isAuthenticated: Boolean,
};

const NavList = ({ isAuthenticated }: Props) => {
	let navList;

	if (isAuthenticated) {
		navList = [
			{ key: 'logout', to: '/logout', text: 'Logout' },
			{ key: 'settings', to: '/settings', text: 'Settings' },
			{ key: 'match', to: '/match', text: 'Start match' },
		];
	} else {
		navList = [
			{ key: 'login', to: '/login', text: 'Login' },
			{ key: 'signup', to: '/signup', text: 'Sign up' },
		];
	}

	return navList.map(btn => {
		return (
			<li
				key={btn.key}
				className={classNames('nav-button', {
					action: btn.key === 'signup' || btn.key === 'match',
				})}
			>
				<Link to={btn.to}>
					<span>{btn.text}</span>
				</Link>
			</li>
		);
	});
};

function mapStateToProps({ user }) {
	return { isAuthenticated: user.isAuthenticated };
}

export default connect(mapStateToProps)(NavList);
