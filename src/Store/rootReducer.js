import { combineReducers } from 'redux';
import AuthReducer from './Reducers/authReducer';
import ExamReducer from './Reducers/examReducer';

const rootReducer = combineReducers(
    {
        auth: AuthReducer,
        exams: ExamReducer
    }
);

export default rootReducer;