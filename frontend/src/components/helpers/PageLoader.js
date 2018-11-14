import React from 'react';
import { PacmanLoader } from 'react-spinners';

const PageLoader = () => {
	return (
		<div className="page-loader">
			<div className="center">
				<PacmanLoader className="loader" color="#f05f50" loading={true} />
			</div>
		</div>
	);
};

export default PageLoader;
