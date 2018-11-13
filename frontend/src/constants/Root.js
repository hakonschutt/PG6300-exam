// @flow
import React from 'react';
import { Provider } from 'react-redux';
import createAppStore from '@constants/createAppStore';

type Props = {
	children: Object,
	store: Object
};

const Root =  ({ children, store = createAppStore() } : Props) => {
	return (
		<Provider store={store}>
			{children}
		</Provider>
	);
};

export default Root;
