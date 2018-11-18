import {
	FETCH_USER,
	SIGNUP_USER,
	LOGIN_USER,
	LOGOUT_USER,
} from '@actions/types';

const defaultState = {
	isAuthenticated: true,
	userId: '83ff1d4d-24db-459a-a2e5-e934ab23b1a3',
	name: 'John doe',
	email: 'john@doe.no',
};

export default function(state = defaultState, action) {
	switch (action.type) {
	case FETCH_USER:
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
