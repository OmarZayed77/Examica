import { combineReducers } from 'redux';
import AuthReducer from './Reducers/authReducer';
import ExamReducer from './Reducers/examReducer';
<<<<<<< HEAD
=======

>>>>>>> fac506ea9ed66e40b97553dd8f82a63f7aabe90d

const rootReducer = combineReducers(
    {
       exams: ExamReducer,
       auth: AuthReducer
    }
);

export default rootReducer;