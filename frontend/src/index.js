import '@assets/sass/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import Root from '@constants/Root';
import AppRoutes from '@constants/AppRoutes';

ReactDOM.render(
	<Root>
		<AppRoutes />
	</Root>,
	document.getElementById('app-root')
);
