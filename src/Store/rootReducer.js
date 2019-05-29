import { combineReducers } from 'redux';
import ExamReducer from './Reducers/examReducer';
import AuthReducer from './Reducers/authReducer';

const rootReducer = combineReducers(
    {
       exams: ExamReducer,
       auth:AuthReducer
    }
);

export default rootReducer;