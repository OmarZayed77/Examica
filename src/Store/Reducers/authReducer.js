import * as authActions from '../Actions/authActions';

const initialState= {
    isLoggedIn: false,
    token: null,
};

const authReducer = (state = initialState, action) => {
    let newState = {...state}; 
    switch(action.type)
    {
        case authActions.LOGIN:
        case authActions.REGISTER:
            newState.isLoggedIn = true;
            token = action.payload;
            break;
        case authActions.LOGOUT:
            newState.isLoggedIn = false;
            token = null;
            break;
        default:
            break;
    }   
    return newState;
}

export default authReducer;