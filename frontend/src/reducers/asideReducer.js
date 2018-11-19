import { CLOSE_ASIDE, SET_ASIDE } from '@actions/types';

const defaultState = null;

export default function(state = defaultState, action) {
	switch (action.type) {
	case CLOSE_ASIDE:
		return defaultState;
	case SET_ASIDE:
		return action.payload;
	default:
		return state;
	}
}
