import io from 'socket.io-client';
import axios from 'axios';

import {
	SET_GLOBAL_ALERT,
	FETCH_MATCH_INFO,
	NEW_MATCH_USER,
} from '@actions/types';

let socket = null;
let currentMatchId = null;

export const setupSocketConnection = (history, matchId) => async dispatch => {
	try {
		const match = await axios.get(`/api/v1/games/${matchId}`);

		currentMatchId = matchId;
		socket = io(window.location.origin, {
			path: '/api/socket',
			query: { matchId },
		});

		// dispatch({ type: FETCH_MATCH_INFO, payload: match });
	} catch (err) {
		dispatch({
			type: SET_GLOBAL_ALERT,
			payload: 'Could not open game connection',
		});

		return history.push('/match');
	}

	if (socket && currentMatchId) {
		socket.on('new_user', data => {
			dispatch({ type: NEW_MATCH_USER, payload: data });
		});
	}
};
