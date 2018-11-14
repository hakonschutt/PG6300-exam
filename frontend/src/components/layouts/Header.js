import React from 'react';
import { Link } from 'react-router-dom';

import { Logo } from '@assets/images';
import { NavList } from '@components';

const Header = () => {
	return (
		<header role="page-header">
			<div className="wrap hpad">
				<div className="left-side">
					<Link to="/">
						<Logo />
					</Link>
				</div>
				<div className="right-side">
					<nav role="page-navigation">
						<ul>
							<NavList />
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
