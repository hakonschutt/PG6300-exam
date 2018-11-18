import React from 'react';

type Props = {
	title: String,
};

const PageHeader = ({ title }: Props) => {
	return (
		<div className="global-page-header">
			<h1>{title}</h1>
		</div>
	);
};

export default PageHeader;
