import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom';
import { connect } from 'react-redux';
import { loadablePage } from '@hocs';

class AppRoutes extends Component {
	componentDidMount() {
		// TODO: Implement a fetch user call
	}

	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={loadablePage(() => import('@containers/LandingPage'))} />
					<Redirect to="/404" />
				</Switch>
			</Router>
		);
	}
}

export default connect(null)(AppRoutes);
