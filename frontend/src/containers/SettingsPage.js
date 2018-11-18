import React from 'react';

import { requireLoggedInUser } from '@hocs';
import { UserSettings, PageHeader } from '@components';

const SettingsPage = () => {
	return (
		<div className="landing-page wrap hpad">
			<div className="options-list">
				<PageHeader title="Settings" />
				<UserSettings />
			</div>
		</div>
	);
};

export default requireLoggedInUser(SettingsPage);
