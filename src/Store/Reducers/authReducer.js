import * as authActions from '../Actions/authActions';

const initialState = {
	isLoggedIn: false,
	token: '',
	// token:
	// 	'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJvQGcuY29tIiwianRpIjoiODE1ZmY4MjEtNTJhOS00MmJhLWJjNzktN2M1YTMwNmM4ZmU3IiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiIzM2EyYTVkNS01MmMzLTQyMGUtODlkNi05OGFiZWIyNzZmODQiLCJleHAiOjE1NjE0NjcyMjEsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6MTU3NjYiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjE1NzY2In0.ZtQY3C3YYG7NDJi2phG8HT0Nv9ObTCcGr8bIioNvwq8',
	userId: ''

};

const authReducer = (state = initialState, action) => {
	let newState = { ...state };
	switch (action.type) {
			case authActions.TOKEN:
			case authActions.REGISTER:
			case authActions.LOGIN:
			newState.isLoggedIn = true;
			newState.token = action.payload.token;
			newState.userId = action.payload.userId;
			break;
		case authActions.LOGOUT:
			newState.isLoggedIn = false;
			newState.token = null;
			break;
		default:
			break;
	}
	console.log(newState);
	return newState;
};
export default authReducer;
