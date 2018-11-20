import React from 'react';
import { ClipLoader } from 'react-spinners';

type Props = {
	color: String,
};

const CenteredLoader = ({ color = '#ffffff' }: Props) => {
	return (
		<div className="centered-loader">
			<ClipLoader className="loader" color={color} loading={true} />
		</div>
	);
};

export default CenteredLoader;
