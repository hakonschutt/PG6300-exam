import { FETCH_MATCH_INFO, NEW_MATCH_USER } from '@actions/types';

const defaultState = {
	title: 'dummy',
	status: 'finished',
	quizId: null,
	currentQuestion: null,
	partyLeaderId: null,
	activePlayers: [
		{
			userId: 321,
			name: 'Tst',
			score: 100,
		},
		{
			userId: 123,
			name: 'HMM',
			score: 80,
		},
	],
};

export default function(state = defaultState, action) {
	switch (action.type) {
	case FETCH_MATCH_INFO:
		return action.payload;
	case NEW_MATCH_USER: {
		const activePlayers = state.activePlayers.map(player => {
			if (player.userId === action.payload.userId) {
				return action.payload;
			} else {
				return player;
			}
		});

		return { ...state, activePlayers };
	}
	default:
		return state;
	}
}
