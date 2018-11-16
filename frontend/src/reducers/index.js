import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from '@reducers/authReducer';
import gameReducer from '@reducers/gameReducer';
import quizReducer from '@reducers/quizReducer';
import popupReducer from '@reducers/popupReducer';

const rootReducer = combineReducers({
	form: formReducer,
	game: gameReducer,
	quiz: quizReducer,
	user: authReducer,
	popup: popupReducer,
});

export default rootReducer;
