import {
	FETCH_QUIZZES,
	FETCH_USER_QUIZZES,
	CREATE_QUIZ,
	SET_QUIZZES_ERROR,
} from '@actions/types';

const staticQuizzes = [
	{
		quizId: 0,
		title: 'Pub quiz',
	},
	{
		quizId: 1,
		title: 'Pub quiz',
	},
	{
		quizId: 2,
		title: 'Pub quiz',
	},
	{
		quizId: 3,
		title: 'Pub quiz',
	},
];

export const fetchQuizzes = () => async dispatch => {
	dispatch({ type: SET_QUIZZES_ERROR, payload: null });
	try {
		dispatch({ type: FETCH_QUIZZES, payload: staticQuizzes });
	} catch (err) {
		dispatch({ type: SET_QUIZZES_ERROR, payload: 'Could not fetch quizzes' });
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
