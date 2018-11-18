import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { loadablePage } from '@hocs';
import { fetchUser } from '@actions';
import AppWrapper from '@constants/AppWrapper';

type Props = {
	fetchUser: Function,
};

class AppRoutes extends Component<Props, *> {
	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		return (
			<Router>
				<AppWrapper>
					<Switch>
						<Route
							exact
							path="/"
							component={loadablePage(() => import('@containers/LandingPage'))}
						/>
						<Route
							path="/login"
							component={loadablePage(() => import('@containers/LoginPage'))}
						/>
						<Route
							path="/logout"
							component={loadablePage(() => import('@containers/LogoutPage'))}
						/>
						<Route
							path="/signup"
							component={loadablePage(() => import('@containers/SignupPage'))}
						/>
						<Route
							exact
							path="/match"
							component={loadablePage(() => import('@containers/MatchPage'))}
						/>
						<Route
							path="/match/:socketId"
							component={loadablePage(() =>
								import('@containers/ActiveMatchPage')
							)}
						/>
						<Route
							path="/quizzes/new"
							component={loadablePage(() => import('@containers/NewQuizPage'))}
						/>
						<Route
							path="/settings"
							component={loadablePage(() => import('@containers/SettingsPage'))}
						/>
						<Route
							path="/404"
							component={loadablePage(() => import('@containers/NotFoundPage'))}
						/>
						<Redirect to="/404" />
					</Switch>
				</AppWrapper>
			</Router>
		);
	}
}

export default connect(
	null,
	{ fetchUser }
)(AppRoutes);
