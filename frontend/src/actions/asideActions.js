import { CLOSE_ASIDE, SET_ASIDE } from '@actions/types';

export const closeAside = () => {
	return {
		type: CLOSE_ASIDE,
		payload: null,
	};
};

export const setAside = component => {
	return {
		type: SET_ASIDE,
		payload: component,
	};
};
