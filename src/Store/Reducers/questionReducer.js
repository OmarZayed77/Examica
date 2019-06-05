import * as questionActions from '../Actions/questionActions';

const initialState = [];

const questionReducer = (state = initialState, action) => {
	let newState = [ ...state ];
	switch (action.type) {
		case questionActions.ADDQUESTION:
			newState.push(action.payload);
			console.log(action.payload, 'was added!');
			break;
		default:
			break;
	}
	return newState;
};

export default questionReducer;
