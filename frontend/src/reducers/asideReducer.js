import { CLOSE_ASIDE, SET_ASIDE } from '@actions/types';

export default function(state = null, action) {
	switch (action.type) {
	case CLOSE_ASIDE:
		return null;
	case SET_ASIDE:
		return action.payload;
	default:
		return state;
	}
}
