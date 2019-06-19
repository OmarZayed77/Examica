import * as userAPI from '../../API/userAPI';

export const LOGIN = 'LOGIN';
export const REGISTER = 'REGISTER';
export const LOGOUT = 'LOGOUT';
export const TOKEN = 'TOKEN';
export const SUBMIT_ERROR = 'SUBMIT_ERROR';
export const REMOVE_ERROR = 'REMOVE_ERROR';


export const loginUserSuccess = (value) => {
    return { type: LOGIN, payload: value }
}

export const logoutUser = () => {
    return dispatch => {
        dispatch({ type: LOGOUT })
    }
}

export const registerUserSuccess = (value) => {
    return { type: REGISTER, payload: value }
}


export const login = (user) => {

    return dispatch => {
        userAPI.login(user)
            .then((response) => {
                console.log("response", response);
                if (response.status === 200) {
                    dispatch(loginUserSuccess(response.data));
                }
                else dispatch({type: SUBMIT_ERROR});
            })
            .catch(err => dispatch({type: SUBMIT_ERROR}));
    }
}

export const register = (user) => {
    return dispatch => {
        userAPI.register(user)
            .then((response) => {
                if (response.status === 200) {
                    dispatch(registerUserSuccess(response.data));
                }
                else dispatch({type: SUBMIT_ERROR});
            })
            .catch(err => dispatch({type: SUBMIT_ERROR}));
    }
}

export const setToken = () => {
    return dispatch => {
        dispatch({ type: TOKEN})
    }
}