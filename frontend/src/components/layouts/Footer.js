import React from 'react';

const Footer = () => {
	return (
		<footer role="page-footer">
			<div className="wrap hpad">
				<div className="center-text">
					<span>Copyright © {new Date().getFullYear()}</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
