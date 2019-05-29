import URL from '../../API/Config/url'
import axios from 'axios'

export const LOGIN = 'LOGIN';
export const REGISTER = 'REGISTER';
export const LOGOUT = 'LOGOUT';


export const loginUserSuccess = (value) => {
    return { type: LOGIN, payload: value }
}

export const logoutUser = (value) => {
    return { type: LOGOUT, payload: value }
}

export const registerUserSuccess = (value) => {
    return { type: REGISTER, payload: value }
}


export const login = (user) => {
    
    return dispatch => {
       var token = localStorage.getItem("token");
       debugger;
        axios.post(`${URL}/api/account/login`, user, {headers: {Authorization: token}})
            .then((response) => {
                console.log(response.data);
                if (response.status === 200) {
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
            console.log(response.data);
            localStorage.setItem("token", response.data);
                if (response.status === 200) {
                    alert("new user added");
                    dispatch(registerUserSuccess(response.data));
                }
            }).catch((error) => { console.log(error); })
    }
}