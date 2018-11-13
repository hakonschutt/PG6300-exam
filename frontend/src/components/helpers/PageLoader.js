import React from 'react';
import { PacmanLoader } from 'react-spinners';

const PageLoader = () => {
	return (
		<div className="page-loader">
			<PacmanLoader className="loader" color="#000000" loading={true} />
		</div>
	);
};

export default PageLoader;
