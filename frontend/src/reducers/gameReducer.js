import { FETCH_GAMES, CREATE_GAME } from '@actions/types';

const defaultState = [];

export default function(state = defaultState, action) {
	switch (action.type) {
	case FETCH_GAMES:
		return action.payload;
	case CREATE_GAME:
		return [action.payload, ...state];
	default:
		return state;
	}
}
