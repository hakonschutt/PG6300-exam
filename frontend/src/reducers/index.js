import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from '@reducers/authReducer';
import gameReducer from '@reducers/gameReducer';
import quizReducer from '@reducers/quizReducer';

const rootReducer = combineReducers({
	form: formReducer,
	game: gameReducer,
	quiz: quizReducer,
	user: authReducer,
});

export default rootReducer;
