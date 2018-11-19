import {
	FETCH_USER,
	SIGNUP_USER,
	LOGIN_USER,
	LOGOUT_USER,
	UPDATE_USER_INFO,
} from '@actions/types';

const defaultState = { isAuthenticated: false };

export default function(state = defaultState, action) {
	switch (action.type) {
	case FETCH_USER:
		return { ...state, ...action.payload };
	case UPDATE_USER_INFO:
		return { ...state, ...action.payload };
	case SIGNUP_USER:
		return { ...state, ...action.payload };
	case LOGIN_USER:
		return { ...state, ...action.payload };
	case LOGOUT_USER:
		return defaultState;
	default:
		return state;
	}
}
