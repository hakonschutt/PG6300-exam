import React from 'react';
import classNames from 'classnames';

type Props = {
	input: Object,
	type: String,
	label: String,
	meta: Object,
};

const FormField = ({ input, type, label, meta: { error, touched } }: Props) => {
	const className = classNames('form-group', {
		'has-danger': touched && error,
		'has-completed': touched && !error,
		'has-simple': !touched,
	});

	return (
		<div className={className}>
			<label>{label}</label>
			<div className="input-wrap">
				<input
					type={type}
					className="form-control"
					autoComplete="off"
					{...input}
				/>
			</div>
		</div>
	);
};

export default FormField;
