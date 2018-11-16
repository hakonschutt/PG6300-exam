import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userReducer from '@reducers/userReducer';
import gameReducer from '@reducers/gameReducer';
import quizReducer from '@reducers/quizReducer';

const rootReducer = combineReducers({
	form: formReducer,
	user: userReducer,
	game: gameReducer,
	quiz: quizReducer,
});

export default rootReducer;
