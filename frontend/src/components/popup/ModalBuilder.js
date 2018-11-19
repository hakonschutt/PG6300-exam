import React from 'react';

import GameStarter from './sub/GameStarter';

type Props = {
	popup: Object,
};

const ModalBuilder = ({ popup }: Props) => {
	switch (popup.component) {
	case 'game-starter':
		return <GameStarter info={popup.info} />;
	default:
		return null;
	}
};

export default ModalBuilder;
