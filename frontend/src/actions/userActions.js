import axios from 'axios';
import {
	FETCH_USER,
	SIGNUP_USER,
	LOGIN_USER,
	LOGOUT_USER,
	UPDATE_USER_INFO,
} from './types';
import { keyedHeader } from '@utils';

export const fetchUser = () => async dispatch => {
	try {
		const res = await axios.get('/api/vi/users/current', keyedHeader);
		dispatch({ type: FETCH_USER, payload: res.data });
	} catch (err) {
		dispatch({ type: FETCH_USER, payload: null });
	}
};

export const updateUserInfo = (data, cb) => async dispatch => {
	try {
		await axios.patch('/api/v1/users/current', data, keyedHeader);
		dispatch({ type: UPDATE_USER_INFO, payload: data });
		return cb(null);
	} catch (err) {
		return cb({ error: 'Could not update email' });
	}
};

export const loginUser = ({ email, password }, cb) => async dispatch => {
	if (!email || !password)
		return cb({ error: 'You need to inklude an email and password' });

	try {
		const res = await axios.post(
			'/api/v1/sign/in',
			{ email, password },
			keyedHeader
		);
		dispatch({ type: LOGIN_USER, payload: res.data });
		return cb(null);
	} catch (err) {
		return cb({ error: err });
	}
};

export const signupUser = ({ name, email, password }, cb) => async dispatch => {
	if (!name || !email || !password)
		return cb({ error: 'You need to inklude a name, an email and password' });

	try {
		const res = await axios.post(
			'/api/v1/sign/up',
			{ name, email, password },
			keyedHeader
		);

		dispatch({ type: SIGNUP_USER, payload: res.data });
		return cb(null);
	} catch (err) {
		return cb({ error: err });
	}
};

export const logoutUser = cb => async dispatch => {
	try {
		await axios.post('/api/v1/sign/out', keyedHeader);
		dispatch({ type: LOGOUT_USER, payload: null });
		return cb(null);
	} catch (err) {
		return cb({ error: 'Could not logout the user' });
	}
};
