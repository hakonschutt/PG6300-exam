import { CLOSE_POPUP, SET_POPUP } from '@actions/types';

const defaultState = { component: null };

export default function(state = defaultState, action) {
	switch (action.type) {
	case CLOSE_POPUP:
		return defaultState;
	case SET_POPUP:
		return action.payload;
	default:
		return state;
	}
}
