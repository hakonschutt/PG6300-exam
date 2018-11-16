import { FETCH_GAMES, CREATE_GAME, SET_GAMES_ERROR } from './types';

export const fetchGames = () => async dispatch => {
	dispatch({ type: SET_GAMES_ERROR, payload: null });
	try {
		dispatch({ type: FETCH_GAMES, payload: null });
	} catch (err) {
		dispatch({ type: SET_GAMES_ERROR, payload: 'Could not fetch games' });
	}
};

export const createGame = (data, cb) => async dispatch => {
	try {
		dispatch({ type: CREATE_GAME, payload: data });
		return cb(null);
	} catch (err) {
		return cb({ error: 'Could not create game' });
	}
};
