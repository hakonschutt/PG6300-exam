import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

export default function(ComposedComponent) {
	type Props = {
		user: Object,
		history: Object,
	};

	class UserRedirect extends Component<Props, *> {
		componentDidMount() {
			if (this.props.user.isAuthenticated) {
				this.props.history.push('/match');
			}
		}

		componentWillUpdate(nextProps) {
			if (nextProps.user.isAuthenticated) {
				this.props.history.push('/match');
			}
		}

		render() {
			return <ComposedComponent {...this.props} />;
		}
	}

	function mapStateToProps({ user }) {
		return { user };
	}

	return connect(mapStateToProps)(withRouter(UserRedirect));
}
