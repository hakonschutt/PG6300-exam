import {
	FETCH_USER,
	LOGIN_USER,
	LOGOUT_USER,
	UPDATE_USER_INFO,
} from '@actions/types';

const defaultState = { isAuthenticated: false };

export default function(state = defaultState, action) {
	switch (action.type) {
	case FETCH_USER:
		return action.payload || state;
	case UPDATE_USER_INFO:
		return { ...state, ...action.payload };
	case LOGIN_USER:
		return action.payload;
	case LOGOUT_USER:
		return defaultState;
	default:
		return state;
	}
}
