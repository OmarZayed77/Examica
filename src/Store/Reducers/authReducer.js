import * as authActions from '../Actions/authActions';

const initialState = {
    isLoggedIn: false,
    token: "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJvQGcuY29tIiwianRpIjoiNTEyZGFmYmUtMmJhNC00YmY1LTg2YzEtZjBhZjgyZWVhOGU4IiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiIzM2EyYTVkNS01MmMzLTQyMGUtODlkNi05OGFiZWIyNzZmODQiLCJleHAiOjE1NTk5MTI5MzgsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6MTU3NjYiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjE1NzY2In0.vMRsGy2PjqBHu3zBFH_KMz-P-LYrWg06ugoep2PI6Gw"
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