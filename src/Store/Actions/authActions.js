import URL from '../../API/Config/url'
import axios from 'axios'

export const LOGIN = 'LOGIN';
export const REGISTER = 'REGISTER';
export const LOGOUT = 'LOGOUT';
export const TOKEN = 'TOKEN';


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
        axios.post(`${URL}/api/account/login`, user)
            .then((response) => {
                if (response.status === 200) {

                    let token = `bearer ${response.data.token}`;
                    localStorage.setItem("token", token);
                    dispatch(loginUserSuccess(response.data));
                }
            })
            .catch((error) => { alert("Login Failed! Please check your user name and password") })
    }
}

export const register = (user) => {
    return dispatch => {
        axios.post(`${URL}/api/account/register`, user)
            .then((response) => {
                let token = `bearer ${response.data.token}`;
                localStorage.setItem("token", token);
                if (response.status === 200) {
                    dispatch(registerUserSuccess(response.data));
                }
            }).catch((error) => { alert("Register Failed! Please try again.") })
    }
}

export const setToken = (value) => {
    return dispatch => {
        dispatch({ type: TOKEN, payload: value })
    }
}