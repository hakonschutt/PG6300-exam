import { FETCH_GAMES, CREATE_GAME, SET_GAMES_ERROR } from './types';

const staticGames = [
	{
		gameId: 0,
		title: 'Pub quiz Long ass title',
		total: 4,
		waiting: 1,
		status: 'Pending',
	},
	{
		gameId: 1,
		title: 'Pub quiz',
		total: 4,
		waiting: 1,
		status: 'Pending',
	},
	{
		gameId: 2,
		title: 'Pub quiz',
		total: 4,
		waiting: 4,
		status: 'Full',
	},
	{
		gameId: 3,
		title: 'Pub quiz',
		total: 6,
		waiting: 4,
		status: 'Active',
	},
];

export const fetchGames = () => async dispatch => {
	dispatch({ type: SET_GAMES_ERROR, payload: null });
	try {
		dispatch({ type: FETCH_GAMES, payload: staticGames });
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
