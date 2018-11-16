import React from 'react';
import { Link } from 'react-router-dom';
import { Questions } from '@assets/images';

const LandingPage = () => {
	return (
		<div className="landing-page">
			<div className="top-banner">
				<div className="wrap hpad">
					<div className="left-info">
						<h1>Questions!</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat
						</p>
						<div className="button-wrap">
							<Link to="/signup">
								<span>Sign up now!</span>
							</Link>
						</div>
					</div>
					<div className="right-image">
						<div className="image-wrap">
							<Questions />
						</div>
					</div>
				</div>
			</div>
			<div className="info-center">
				<div className="contain hpad">
					<h2>How are we?</h2>
					<p>
						At vero eos et accusamus et iusto odio dignissimos ducimus qui
						blanditiis praesentium voluptatum deleniti atque corrupti quos
						dolores et quas molestias excepturi sint occaecati cupiditate non
						provident, similique sunt in culpa qui officia deserunt mollitia
						animi, id est laborum et dolorum fuga.
					</p>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
