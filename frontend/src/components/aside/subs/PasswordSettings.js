import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { updateUserInfo, closePopup } from '@actions';
import { FormBuilder } from '@components';
import { formValidation } from '@utils';

const formFields = [
	{
		label: 'Current password',
		type: 'password',
		name: 'password',
		error: 'You need to include a password',
	},
	{
		label: 'New password',
		type: 'password',
		name: 'new_password',
		error: 'You need to include a password',
	},
	{
		label: 'Repeat new password',
		type: 'password',
		name: 'repeat_password',
		error: 'You need to include a password',
	},
];

// @flow
type Props = {
	closePopupModal: Function,
	updateUserInfo: Function,
	handleSubmit: Function,
};

class PasswordSettings extends Component<Props, *> {
	constructor(props) {
		super(props);

		this.state = {
			loading: null,
			error: null,
		};
	}

	async onSubmit(fields) {
		this.setState({ loading: true });
		const { updateUserInfo, closePopup } = this.props;

		updateUserInfo(fields, err => {
			if (err) {
				this.setState({
					...err,
					loading: false,
				});
			} else {
				closePopup();
			}
		});
	}

	render() {
		const { handleSubmit } = this.props;
		const { error, loading } = this.state;

		return (
			<div className="password-settings-inner">
				<h2>Change password</h2>
				<FormBuilder
					onSubmit={handleSubmit(this.onSubmit.bind(this))}
					error={error}
					loading={loading}
					buttonText="Change"
					formFields={formFields}
				/>
			</div>
		);
	}
}

function validate(values) {
	const errors = formValidation(values, formFields);

	if (values.new_password !== values.repeat_password) {
		errors.new_password = 'The passwords need to match';
	}

	return errors;
}

function mapStateToProps({ user }) {
	return { user };
}

export default reduxForm({
	validate,
	form: 'passwordSettingsForm',
})(
	connect(
		mapStateToProps,
		{ updateUserInfo, closePopup }
	)(PasswordSettings)
);
