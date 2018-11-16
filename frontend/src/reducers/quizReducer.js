import {
	FETCH_QUIZZES,
	FETCH_USER_QUIZZES,
	CREATE_QUIZ,
	SET_QUIZZES_ERROR,
} from '@actions/types';

const defaultState = { error: null, list: [] };

export default function(state = defaultState, action) {
	switch (action.type) {
	case FETCH_QUIZZES:
		return { ...state, list: [...state.list, ...action.payload] };
	case FETCH_USER_QUIZZES:
		return { ...state, list: action.payload };
	case CREATE_QUIZ:
		return { ...state, list: [action.payload, ...state.list] };
	case SET_QUIZZES_ERROR:
		return { ...state, error: action.payload };
	default:
		return state;
	}
}
