import React from 'react';
import { requireLoggedInUser } from '@hocs';

const ActiveMatchPage = () => {
	return (
		<div className="landing-page wrap hpad">
			<div className="options-list">
				<h1>ActiveGamePage</h1>
			</div>
		</div>
	);
};

export default requireLoggedInUser(ActiveMatchPage);
