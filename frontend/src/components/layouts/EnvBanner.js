import React from 'react';

const EnvBanner = () => {
	if (['docker', 'development', 'staging'].includes(process.env.NODE_ENV)) {
		return (
			<div className="env-banner">
				<h5>{process.env.NODE_ENV.toUpperCase()}</h5>
			</div>
		);
	}

	return null;
};

export default EnvBanner;
