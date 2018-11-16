import axios from 'axios';
import { FETCH_USER, SIGNUP_USER, LOGIN_USER, LOGOUT_USER } from './types';

export const fetchUser = () => async dispatch => {
	try {
		const res = await axios.get('/api/vi/users/current');

		dispatch({ type: FETCH_USER, payload: res.data });
	} catch (err) {
		dispatch({ type: FETCH_USER, payload: null });
	}
};

export const loginUser = ({ email, password }, cb) => async dispatch => {
	if (!email || !password)
		return cb({ error: 'You need to inklude an email and password' });

	try {
		const res = await axios.post('/api/v1/sign/in', { email, password });

		dispatch({ type: LOGIN_USER, payload: res.data });
		return cb(null);
	} catch (err) {
		return cb({ error: 'Invalid email og password' });
	}
};

export const signupUser = ({ name, email, password }, cb) => async dispatch => {
	if (!name || !email || !password)
		return cb({ error: 'You need to inklude a name, an email and password' });

	try {
		const res = await axios.post('/api/v1/sign/up', { name, email, password });

		dispatch({ type: SIGNUP_USER, payload: res.data });
		return cb(null);
	} catch (err) {
		return cb({ error: 'Could not create a new user' });
	}
};

export const logoutUser = cb => async dispatch => {
	try {
		await axios.post('/api/v1/sign/out');

		dispatch({ type: LOGOUT_USER, payload: null });
		return cb(null);
	} catch (err) {
		return cb({ error: 'Could not logout the user' });
	}
};
