import { combineReducers } from 'redux';
import AuthReducer from './Reducers/authReducer';
import ExamReducer from './Reducers/examReducer';

const rootReducer = combineReducers(
    {
       exams: ExamReducer,
       authReducer: AuthReducer
    }
);

export default rootReducer;