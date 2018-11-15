import React from 'react';
import { Link } from 'react-router-dom';

import ConfusedPerson from '@assets/images/large-img/confused-person.png';

const NotFoundPage = () => {
	return (
		<div className="not-found-page">
			<div className="wrap hpad">
				<div className="not-found-page-inner">
					<div className="left-side">
						<h1>404</h1>
						<h3>{'We can\'t seem to find the page you\'re looking for.'}</h3>
						<div className="button-wrap">
							<Link to="/">Back to homepage</Link>
						</div>
					</div>
					<div className="right-side">
						<img src={ConfusedPerson} alt="confused person" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default NotFoundPage;
