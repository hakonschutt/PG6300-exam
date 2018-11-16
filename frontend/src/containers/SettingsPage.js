import React from 'react';

import { requireLoggedInUser } from '@hocs';

const SettingsPage = () => {
	return (
		<div className="landing-page wrap hpad">
			<div className="options-list">
				<h1>SettingsPage</h1>
			</div>
		</div>
	);
};

export default requireLoggedInUser(SettingsPage);
