import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

type Props = {
	user: Object,
};

const NavList = ({ user = { isAuthenticated: false } }: Props) => {
	const navButton = 'nav-button';
	const userAction = classNames(navButton, 'user-action-btn');

	let navList = [];

	if (user && user.isAuthenticated) {
		navList = [
			{ key: 'games', to: '/games', className: navButton, text: 'Games' },
			{ key: 'quizzes', to: '/quizzes', className: navButton, text: 'Quizzes' },
			{
				key: 'settings',
				to: '/settings',
				className: navButton,
				text: 'Settings',
			},
			{ key: 'logout', to: '/logout', className: userAction, text: 'Logout' },
		];
	} else {
		navList = [
			{ key: 'login', to: '/login', className: userAction, text: 'Login' },
		];
	}

	return navList.map(btn => (
		<li key={btn.key} className={btn.className}>
			<Link to={btn.to}>
				<span>{btn.text}</span>
			</Link>
		</li>
	));
};

export default NavList;
