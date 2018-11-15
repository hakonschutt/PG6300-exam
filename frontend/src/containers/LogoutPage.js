import React, { Component } from 'react';

import { PageLoader } from '@components';
import { reduxConnect } from '@hocs';

type Props = {
	logoutUser: Function,
	history: Object,
};

class LogoutPage extends Component<Props, *> {
	constructor(props) {
		super(props);
		this.state = { error: null };
	}

	componentDidMount() {
		const { logoutUser, history } = this.props;

		logoutUser(err => {
			if (!err) {
				history.push('/');
			} else {
				this.setState(err);
			}
		});
	}

	render() {
		return <PageLoader />;
	}
}

export default reduxConnect(LogoutPage);
