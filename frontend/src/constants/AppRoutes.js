import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { loadablePage } from '@hocs';
import AppWrapper from '@constants/AppWrapper';

class AppRoutes extends Component {
	componentDidMount() {
		// TODO: Implement a fetch user call
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
							exact
							path="/games"
							component={loadablePage(() => import('@containers/GamesPage'))}
						/>
						<Route
							path="/games/:socketId"
							component={loadablePage(() =>
								import('@containers/ActiveGamePage')
							)}
						/>
						<Route
							exact
							path="/quizzes"
							component={loadablePage(() => import('@containers/QuizzesPage'))}
						/>
						<Route
							path="/quizzes/new"
							component={loadablePage(() => import('@containers/NewQuizPage'))}
						/>
						<Route
							path="/quizzes/edit/:quizId"
							component={loadablePage(() => import('@containers/EditQuizPage'))}
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

export default connect(null)(AppRoutes);
