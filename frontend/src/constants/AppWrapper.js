// @flow
import React from 'react';

import { Header, Footer, EnvBanner, AsideModal } from '@components';

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
			<AsideModal />
		</div>
	);
};

export default AppWrapper;
