import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { requireLoggedOutUser } from '@hocs';
import { formValidation } from '@utils';
import { FormBuilder } from '@components';
import { signupUser } from '@actions';

const formFields = [
	{
		label: 'Name',
		type: 'text',
		name: 'name',
		error: 'You need to include a name',
	},
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
	{
		label: 'Confirm passord',
		type: 'password',
		name: 'repeat_password',
		error: 'You need to include a password',
	},
];

type Props = {
	handleSubmit: Function,
	signupUser: Function,
	history: Object,
};

class SignupPage extends Component<Props, *> {
	constructor(props) {
		super(props);

		this.state = {
			error: '',
			loading: null,
		};
	}

	onSubmit(values) {
		const { signupUser, history } = this.props;

		this.setState({ loading: true });

		signupUser(values, error => {
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
						<h1>Signup</h1>
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
	const errors = formValidation(values, formFields);

	if (values.password !== values.repeat_password) {
		errors.password = 'Passwords need to match';
	}

	return errors;
}

export default reduxForm({
	validate,
	form: 'signupForm',
})(
	connect(
		null,
		{ signupUser }
	)(withRouter(requireLoggedOutUser(SignupPage)))
);
