import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { formValidation } from '@utils';
import { FormBuilder } from '@components';
import { loginUser } from '@actions';

const formFields = [
	{
		label: 'Email',
		type: 'text',
		name: 'email',
		error: 'You need to include a password',
	},
	{
		label: 'Passord',
		type: 'password',
		name: 'password',
		error: 'You need to include a password',
	},
];

type Props = {
	handleSubmit: Function,
	loginUser: Function,
	history: Object,
};

class LoginPage extends Component<Props, *> {
	constructor(props) {
		super(props);

		this.state = {
			error: '',
			loading: null,
		};
	}

	onSubmit(values) {
		const { loginUser, history } = this.props;

		this.setState({ loading: true });

		loginUser(values, error => {
			if (error) {
				this.setState({ error, loading: false });
			} else {
				history.push('/settings');
			}
		});
	}

	render() {
		const { handleSubmit } = this.props;
		const { error, loading } = this.state;

		return (
			<div className="login-page">
				<div className="contain hpad">
					<div className="options-list">
						<h1>Login</h1>
						<FormBuilder
							onSubmit={handleSubmit(this.onSubmit.bind(this))}
							error={error}
							loading={loading}
							buttonText="Login"
							formFields={formFields}
						/>
					</div>
				</div>
			</div>
		);
	}
}

function validate(values) {
	return formValidation(values, formFields);
}

export default reduxForm({
	validate,
	form: 'loginForm',
})(
	connect(
		null,
		{ loginUser }
	)(withRouter(LoginPage))
);
