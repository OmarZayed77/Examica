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
        dispatch({ type: LOGOUT})
    }
}

export const registerUserSuccess = (value) => {
    return { type: REGISTER, payload: value }
}


export const login = (user) => {

    return dispatch => {
        var token = localStorage.getItem("token");
        axios.post(`${URL}/api/account/login`, user, { headers: { Authorization: token } })
            .then((response) => {
                if (response.status === 200) {
                    let token =  response.data;
                    localStorage.setItem("token",token);
                    alert("loggedIn successfully");
                }
                dispatch(loginUserSuccess(response.data));
            }).catch((error) => { console.log(error); })
    }
}

export const register = (user) => {
    return dispatch => {
        axios.post(`${URL}/api/account/register`, user)
            .then((response) => {
                localStorage.setItem("token", response.data);
                if (response.status === 200) {
                    alert("new user added");
                    dispatch(registerUserSuccess(response.data));
                }
            }).catch((error) => { console.log(error); })
    }
}

export const setToken = (value) => {
    return dispatch => {
        dispatch({ type: TOKEN, payload: value })
    }
}