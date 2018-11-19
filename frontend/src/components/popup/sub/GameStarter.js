import React, { Component } from 'react';
import axios from 'axios';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { formValidation } from '@utils';
import { FormBuilder } from '@components';
import { closePopup } from '@actions';

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
	closePopup: Function,
	info: Object,
	history: Object,
};

class GameStarter extends Component<Props, *> {
	constructor(props) {
		super(props);

		this.state = {
			error: '',
			loading: null,
		};
	}

	async onSubmit(values) {
		this.setState({ loading: true });

		try {
			const res = await axios.post('/api/v1/games', {
				...values,
				...this.props.info,
			});

			this.props.history.push(`/match/${res.data.id}`);
			this.props.closePopup();
		} catch (err) {
			this.setState({
				loading: false,
				error: 'Could not create match',
			});
		}
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
})(
	connect(
		null,
		{ closePopup }
	)(withRouter(GameStarter))
);
