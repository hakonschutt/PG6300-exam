import axios from 'axios';

import {
	FETCH_QUIZZES,
	FETCH_USER_QUIZZES,
	CREATE_QUIZ,
	SET_GLOBAL_ALERT,
} from '@actions/types';

export const fetchQuizzes = () => async dispatch => {
	try {
		const res = await axios.get('/api/v1/quizzes');

		dispatch({ type: FETCH_QUIZZES, payload: res.data });
	} catch (err) {
		dispatch({ type: SET_GLOBAL_ALERT, payload: 'Could not fetch quizzes' });
	}
};

export const fetchUserQuizzes = cb => async dispatch => {
	try {
		dispatch({ type: FETCH_USER_QUIZZES, payload: [] });
		return cb(null);
	} catch (err) {
		return cb({ error: 'Could not fetch quizzes' });
	}
};

export const createQuiz = (data, cb) => async dispatch => {
	try {
		dispatch({ type: CREATE_QUIZ, payload: data });
		return cb(null);
	} catch (err) {
		return cb({ error: 'Could not create quiz' });
	}
};
