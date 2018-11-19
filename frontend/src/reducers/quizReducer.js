import { FETCH_QUIZZES, CREATE_QUIZ } from '@actions/types';

const defaultState = [];

export default function(state = defaultState, action) {
	switch (action.type) {
	case FETCH_QUIZZES:
		return action.payload;
	case CREATE_QUIZ:
		return [action.payload, ...state];
	default:
		return state;
	}
}
