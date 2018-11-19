import React from 'react';

import { requireLoggedInUser } from '@hocs';

const NewQuizPage = () => {
	return (
		<div className="landing-page wrap hpad">
			<div className="options-list">
				<h1>NewQuizPage</h1>
			</div>
		</div>
	);
};

export default requireLoggedInUser(NewQuizPage);
