import io from 'socket.io-client';
import axios from 'axios';

import { SET_GLOBAL_ALERT, UPDATE_MATCH, PAUSE_MATCH } from '@actions/types';

let socket = null;
let currentMatchId = null;

export const setupSocketConnection = (history, matchId) => async dispatch => {
	try {
		await axios.get(`/api/v1/games/${matchId}`);

		currentMatchId = matchId;
		socket = io(window.location.origin, {
			path: '/api/socket',
			query: { matchId },
		});
	} catch (err) {
		dispatch({
			type: SET_GLOBAL_ALERT,
			payload: 'Could not open game connection',
		});

		return history.push('/match');
	}

	if (socket && currentMatchId) {
		socket.on('match_update', match => {
			dispatch({ type: UPDATE_MATCH, payload: match });
		});

		socket.on('match_error', data => {
			dispatch({ type: SET_GLOBAL_ALERT, payload: data.error });
		});
	}
};

export const startMatch = () => dispatch => {
	console.log('GOT HERE');
	socket.emit('start_match', {});
};

export const answerMatchQuestion = data => dispatch => {
	socket.emit('answer_question', data);
};

export const goToPausePage = () => {
	return {
		type: PAUSE_MATCH,
		payload: null,
	};
};
