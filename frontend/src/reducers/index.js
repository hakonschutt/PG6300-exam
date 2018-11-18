import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from '@reducers/authReducer';
import gameReducer from '@reducers/gameReducer';
import quizReducer from '@reducers/quizReducer';
import popupReducer from '@reducers/popupReducer';
import asideReducer from '@reducers/asideReducer';

const rootReducer = combineReducers({
	form: formReducer,
	games: gameReducer,
	quizzes: quizReducer,
	user: authReducer,
	popup: popupReducer,
	aside: asideReducer,
});

export default rootReducer;
