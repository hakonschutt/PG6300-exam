import React from 'react';
import { ClipLoader } from 'react-spinners';

type Props = {
	loading: Boolean,
	text: String,
};

const FormButton = ({ loading, text }: Props) => {
	return (
		<button type="submit" className="form-button submit-btn">
			{loading ? (
				<ClipLoader className="loader" color={'#ff7f2f'} loading={true} />
			) : (
				text
			)}
		</button>
	);
};

export default FormButton;
