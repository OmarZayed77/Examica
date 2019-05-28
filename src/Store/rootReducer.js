import { combineReducers } from 'redux';
import ExamReducer from './Reducers/examReducer';

const rootReducer = combineReducers(
    {
       exams: ExamReducer
    }
);

export default rootReducer;