import { SET_GLOBAL_ALERT, REMOVE_GLOBAL_ALERT } from '@actions/types';

export const setGlobalAlert = message => {
	return {
		type: SET_GLOBAL_ALERT,
		payload: message,
	};
};

export const removeGlobalAlert = () => {
	return {
		type: REMOVE_GLOBAL_ALERT,
		payload: null,
	};
};
