import { combineReducers } from 'redux';
import AuthReducer from './Reducers/authReducer';
import ExamReducer from './Reducers/examReducer';
import OrgReducer from './Reducers/organizationReducer';
import QuestionReducer from './Reducers/questionReducer';

const rootReducer = combineReducers(
    {
       exams: ExamReducer,
       auth: AuthReducer,
       organizations: OrgReducer,
       questions: QuestionReducer
    }
);

export default rootReducer;