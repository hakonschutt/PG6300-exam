// @flow
import React from 'react';

import {
	Header,
	Footer,
	EnvBanner
} from '@components';

type Props = {
	children: Object
};

const AppWrapper = ({ children } : Props ) => {
	return (
		<div>
			<EnvBanner />
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
};

export default AppWrapper;
