import React from 'react';

type Props = {
	input: Object,
	type: String,
	label: String,
	meta: Object,
};

const FormField = ({ input, type, label, meta: { error, touched } }: Props) => {
	const classNames = `form-group ${
		touched && error
			? 'has-danger'
			: `${touched && !error ? 'has-completed' : ''}`
	}`;

	return (
		<div className={classNames}>
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
