import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from '@reducers/authReducer';
import quizReducer from '@reducers/quizReducer';
import popupReducer from '@reducers/popupReducer';
import asideReducer from '@reducers/asideReducer';
import alertReducer from '@reducers/alertReducer';

const rootReducer = combineReducers({
	form: formReducer,
	alert: alertReducer,
	user: authReducer,
	popup: popupReducer,
	aside: asideReducer,
	quizzes: quizReducer,
});

export default rootReducer;
