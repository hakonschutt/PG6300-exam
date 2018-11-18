import React from 'react';

type Props = {
	popup: Object,
};

const ModalBuilder = ({ popup }: Props) => {
	switch (popup.component) {
	case 'name-settings':
		return null;
	default:
		return null;
	}
};

export default ModalBuilder;
