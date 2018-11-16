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
			{ key: 'games', to: '/games', text: 'Games' },
			{ key: 'quizzes', to: '/quizzes', text: 'Quizzes' },
			{ key: 'settings', to: '/settings', text: 'Settings' },
			{ key: 'logout', to: '/logout', text: 'Logout' },
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
					action: btn.key === 'signup',
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
