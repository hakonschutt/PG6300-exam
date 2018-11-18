import React, { Component } from 'react';

import { PageHeader } from '@components';

class GamesPage extends Component {
	componentDidMount() {
		console.log('DID MOUNT');
	}

	render() {
		return (
			<div className="games-page">
				<div className="wrap hpad">
					<div className="options-list">
						<PageHeader title="Games" />
					</div>
				</div>
			</div>
		);
	}
}

export default GamesPage;
