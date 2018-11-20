import {
	UPDATE_MATCH,
	PAUSE_MATCH,
	ANSWER_QUESTION,
	START_MATCH,
} from '@actions/types';

const defaultState = {
	title: null,
	status: 'pending',
	quizId: null,
	currentQuestion: null,
	partyLeaderId: null,
	activePlayers: [],
};

export default function(state = defaultState, action) {
	switch (action.type) {
	case UPDATE_MATCH:
		return { ...state, ...action.payload };
	case PAUSE_MATCH:
		return { ...state, status: 'pause' };
	case ANSWER_QUESTION:
	case START_MATCH:
		return state;
	default:
		return state;
	}
}
