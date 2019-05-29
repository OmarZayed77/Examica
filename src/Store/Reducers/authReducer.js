import * as authActions from '../Actions/authActions';

const initialState = {
    isLoggedIn: false,
    token: null,
};

const authReducer = (state = initialState, action) => {
    let newState = { ...state };
    switch (action.type) {
        case authActions.LOGIN:
            newState.isLoggedIn = true;
            newState.token = action.payload;
        case authActions.REGISTER:
            newState.isLoggedIn = true;
            newState.token = action.payload;
            break;
        case authActions.LOGOUT:
            newState.isLoggedIn = false;
            newState.token = null;
            break;
        default:
            break;
    }
    return newState;
}

export default authReducer;