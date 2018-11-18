// @flow
import React from 'react';

import {
	Header,
	Footer,
	EnvBanner,
	AsideModal,
	PopupModal,
	PageAlert,
} from '@components';

type Props = {
	children: Object,
};

const AppWrapper = ({ children }: Props) => {
	return (
		<div>
			<EnvBanner />
			<PageAlert />
			<Header />
			<main>{children}</main>
			<Footer />
			<AsideModal />
			<PopupModal />
		</div>
	);
};

export default AppWrapper;
