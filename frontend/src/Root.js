// @flow

import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from '@reducers';

type Props = {
	children: Object,
  initialState: Object
}

const Root =  ({ children, initialState = {} } : Props) => {
	console.log(children);
	
	const store = createStore(
		reducers,
		initialState,
		applyMiddleware(reduxThunk)
	);

	return (
		<Provider store={store}>
			{children}
		</Provider>
	);
};

export default Root;
