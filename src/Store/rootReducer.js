import { combineReducers } from 'redux';
import AuthReducer from './Reducers/authReducer'

const rootReducer = combineReducers(
    {
       auth: AuthReducer,
    }
);

export default rootReducer;