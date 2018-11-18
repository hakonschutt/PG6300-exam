import React, { Component } from 'react';
import { connect } from 'react-redux';

import { PageHeader } from '@components';

type Props = {
	games: Object,
};

class MatchPage extends Component<Props, *> {
	constructor(props) {
		super(props);

		this.onSingleClick = this.onSingleClick.bind(this);
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

function mapStateToProps({ games }) {
	return { games };
}

export default connect(
	mapStateToProps,
	{}
)(MatchPage);
