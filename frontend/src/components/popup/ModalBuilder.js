import React from 'react';

import NameSettings from './subs/NameSettings';
import EmailSettings from './subs/EmailSettings';
import PasswordSettings from './subs/PasswordSettings';

type Props = {
	popup: String,
};

const ModalBuilder = ({ popup }: Props) => {
	switch (popup) {
	case 'name-settings':
		return <NameSettings />;
	case 'email-settings':
		return <EmailSettings />;
	case 'password-settings':
		return <PasswordSettings />;
	default:
		return null;
	}
};

export default ModalBuilder;
