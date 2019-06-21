import { combineReducers } from 'redux';
import AuthReducer from './Reducers/authReducer';
import ExamReducer from './Reducers/examReducer';
import OrgReducer from './Reducers/organizationReducer';
import QuestionReducer from './Reducers/questionReducer';
import UserReducer from './Reducers/userReducer';
import LoadingReducer from './Reducers/loadingReducer';

const rootReducer = combineReducers(
    {
       exams: ExamReducer,
       auth: AuthReducer,
       organizations: OrgReducer,
       questions: QuestionReducer,
       users: UserReducer,
       isLoading: LoadingReducer
    }
);

export default rootReducer;