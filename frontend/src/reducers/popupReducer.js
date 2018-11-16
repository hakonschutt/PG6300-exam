import { CLOSE_POPUP, SET_POPUP } from '../actions/types';

export default function(state = '', action) {
	switch (action.type) {
	case CLOSE_POPUP:
		return '';
	case SET_POPUP:
		return action.payload;
	default:
		return state;
	}
}
