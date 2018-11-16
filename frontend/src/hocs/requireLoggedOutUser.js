import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

export default function(ComposedComponent) {
	type Props = {
		user: Object,
		history: Object,
	};

	class RequireLoggedOutUser extends Component<Props, *> {
		componentDidMount() {
			if (this.props.user && this.props.user.isAuthenticated) {
				this.props.history.push('/404');
			}
		}

		componentWillUpdate(nextProps) {
			if (nextProps.user && nextProps.user.isAuthenticated) {
				this.props.history.push('/404');
			}
		}

		render() {
			return <ComposedComponent {...this.props} />;
		}
	}

	function mapStateToProps({ user }) {
		return { user };
	}

	return connect(mapStateToProps)(withRouter(RequireLoggedOutUser));
}
