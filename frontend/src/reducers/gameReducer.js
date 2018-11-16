import { FETCH_GAMES, CREATE_GAME, SET_GAMES_ERROR } from '@actions/types';

const defaultState = { error: null, list: [] };

export default function(state = defaultState, action) {
	switch (action.type) {
	case FETCH_GAMES:
		return { ...state, list: [...state.list, ...action.payload] };
	case CREATE_GAME:
		return { ...state, list: [action.payload, ...state.list] };
	case SET_GAMES_ERROR:
		return { ...state, error: action.payload };
	default:
		return state;
	}
}
