export const LOGIN = "LOGIN";
export const REGISTER = "REGISTER";
export const LOGOUT = "LOGOUT";


export const loginUserSuccess = (value) => {
    return {type: LOGIN, payload: value}
}

export const logoutUser = (value) => {
    return {type: LOGOUT, payload: value}
}

export const registerUserSuccess = (value) => {
    return {type: REGISTER, payload: value}
}