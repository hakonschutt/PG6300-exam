import { FETCH_MATCH_INFO, NEW_MATCH_USER } from '@actions/types';

const defaultState = {
	title: null,
	status: null,
	quizId: null,
	currentQuestion: null,
	partyLeaderId: null,
	activePlayers: [],
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
