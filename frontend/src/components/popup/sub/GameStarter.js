import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { formValidation } from '@utils';
import { FormBuilder } from '@components';
import { loginUser } from '@actions';

const formFields = [
	{
		label: 'Title',
		type: 'text',
		name: 'title',
		error: 'You need to include a title',
	},
];

type Props = {
	handleSubmit: Function,
};

class GameStarter extends Component<Props, *> {
	constructor(props) {
		super(props);

		this.state = {
			error: '',
			loading: null,
		};
	}

	onSubmit(values) {
		this.setState({ loading: true });
		console.log(values);
	}

	render() {
		const { handleSubmit } = this.props;
		const { error, loading } = this.state;

		return (
			<div className="game-start-modal">
				<h3>Create a game</h3>
				<FormBuilder
					onSubmit={handleSubmit(this.onSubmit.bind(this))}
					error={error}
					loading={loading}
					buttonText="Start"
					formFields={formFields}
				/>
			</div>
		);
	}
}

function validate(values) {
	return formValidation(values, formFields);
}

export default reduxForm({
	validate,
	form: 'gameStarterForm',
})(GameStarter);
