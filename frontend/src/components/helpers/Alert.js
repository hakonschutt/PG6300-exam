import React from 'react';

type Props = {
	error: String,
};

const Alert = ({ error }: Props) => {
	if (error) {
		return (
			<div className="global-alert alert-danger">
				<strong>Oops!</strong> {error}
			</div>
		);
	}

	return null;
};

export default Alert;
