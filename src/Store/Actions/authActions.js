export const LOGIN = "LOGIN";
export const REGISTER = "REGISTER";
export const LOGOUT = "LOGOUT";


export const loginUser = (value) => {
    return {type: LOGIN, payload: value}
}

export const logoutUser = (value) => {
    return {type: LOGOUT, payload: value}
}

export const registerUser = (value) => {
    return {type: REGISTER, payload: value}
}