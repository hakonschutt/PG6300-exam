import React, { Component } from 'react';
import { Field } from 'redux-form';
import { FormField, FormButton } from '@components';

type Props = {
	formMount: Function,
	formFields: Array,
	onSubmit: Function,
	loading: Boolean,
	error?: String,
	buttonText?: String,
};

class FormBuilder extends Component<Props, *> {
	componentDidMount() {
		if (typeof this.props.formMount === 'function') {
			this.props.formMount();
		}
	}

	render() {
		const { onSubmit, loading, buttonText } = this.props;

		return (
			<div className="form-wrap">
				<form onSubmit={onSubmit}>
					{this.props.formFields.map(({ name, label, type }) => (
						<Field
							key={name}
							label={label}
							type={type}
							name={name}
							component={FormField}
						/>
					))}
					<FormButton text={buttonText} loading={loading} />
				</form>
			</div>
		);
	}
}

export default FormBuilder;
