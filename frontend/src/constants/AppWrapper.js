// @flow
import React from 'react';

import { Header, Footer, EnvBanner, PopupModal } from '@components';

type Props = {
	children: Object,
};

const AppWrapper = ({ children }: Props) => {
	return (
		<div>
			<EnvBanner />
			<Header />
			<main>{children}</main>
			<Footer />
			<PopupModal />
		</div>
	);
};

export default AppWrapper;
