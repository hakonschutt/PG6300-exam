import { UPDATE_MATCH, PAUSE_MATCH } from '@actions/types';

const defaultState = {
	title: 'null',
	status: 'active',
	quizId: null,
	currentQuestion: {
		question: 'Test wuestion',
		answers: ['Test', 'Test', 'Test', 'Test'],
	},
	partyLeaderId: 1,
	activePlayers: [
		{
			userId: 1,
			name: 'Test',
			score: 90,
		},
		{
			userId: 2,
			name: 'Test',
			score: 120,
		},
		{
			userId: 3,
			name: 'Test',
			score: 100,
		},
	],
};

export default function(state = defaultState, action) {
	switch (action.type) {
	case UPDATE_MATCH:
		return { ...state, ...action.payload };
	case PAUSE_MATCH:
		return { ...state, status: 'pause' };
	default:
		return state;
	}
}
