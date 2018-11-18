import React, { Component } from 'react';

import { PageHeader } from '@components';

class QuizzesPage extends Component {
	componentDidMount() {}

	render() {
		return (
			<div className="landing-page">
				<div className="wrap hpad">
					<div className="options-list">
						<PageHeader title="Quizzes" />
					</div>
				</div>
			</div>
		);
	}
}

export default QuizzesPage;
