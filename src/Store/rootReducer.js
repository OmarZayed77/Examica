import { combineReducers } from 'redux';
import AuthReducer from './Reducers/authReducer';
import ExamReducer from './Reducers/examReducer';
import OrgReducer from './Reducers/organizationReducer';

const rootReducer = combineReducers(
    {
       exams: ExamReducer,
       auth: AuthReducer,
       organizations: OrgReducer
    }
);

export default rootReducer;