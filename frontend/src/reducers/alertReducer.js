import { SET_GLOBAL_ALERT, REMOVE_GLOBAL_ALERT } from '@actions/types';

const defaultState = '';

export default function(state = defaultState, action) {
	switch (action.type) {
	case SET_GLOBAL_ALERT:
		return action.payload;
	case REMOVE_GLOBAL_ALERT:
		return defaultState;
	default:
		return state;
	}
}
