import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { updateUserInfo, closeAside } from '@actions';
import { FormBuilder } from '@components';
import { formValidation } from '@utils';

const formFields = [
	{
		label: 'Ny name',
		type: 'text',
		name: 'name',
		error: 'You need to include a name',
	},
	{
		label: 'Current passord',
		type: 'password',
		name: 'password',
		error: 'You need to include a password',
	},
];

// @flow
type Props = {
	closeAside: Function,
	updateUserInfo: Function,
	handleSubmit: Function,
	initialize: Function,
	user: Object,
};

class NameSettings extends Component<Props, *> {
	constructor(props) {
		super(props);

		this.state = {
			loading: null,
			error: null,
		};
	}

	componentMount() {
		const { initialize, user } = this.props;

		if (user && user.name) {
			initialize({ name: user.name });
		}
	}

	async onSubmit(fields) {
		this.setState({ loading: true });
		const { updateUserInfo, closeAside } = this.props;

		updateUserInfo(fields, err => {
			if (err) {
				this.setState({
					...err,
					loading: false,
				});
			} else {
				closeAside();
			}
		});
	}

	render() {
		const { handleSubmit, user } = this.props;
		const { error, loading } = this.state;

		return (
			<div className="name-settings-inner">
				<h2>Change name</h2>
				<div className="current">
					<label>Current name: </label>
					<span>{user && user.name}</span>
				</div>
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
	return formValidation(values, formFields);
}

function mapStateToProps({ user }) {
	return { user };
}

export default reduxForm({
	validate,
	form: 'nameSettingsForm',
})(
	connect(
		mapStateToProps,
		{ closeAside, updateUserInfo }
	)(NameSettings)
);
