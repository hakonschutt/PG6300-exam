import { CLOSE_POPUP, SET_POPUP } from './types';

export const closePopup = () => {
	return {
		type: CLOSE_POPUP,
		payload: null,
	};
};

export const setPopup = info => {
	return {
		type: SET_POPUP,
		payload: info,
	};
};
