import * as questionActions from '../Actions/questionActions';

const initialState = {
	questions: [
		{
			title: 'What is abstract in C#?',
			level: 'easy',
			type: 'multiple choice',
			mark: 5,
			isPublic: 'true'
		}
	]
};

const questionReducer = (state = initialState, action) => {
	let newArr = [...state.questions];
	switch (action.type) {
		case questionActions.ADDQUESTION:
			newArr.questions.push(action.payload);
			console.log(action.payload, 'was added!');
			break;
		case questionActions.GET_ALL_QUSTIONS:
			newArr = action.payload;
			console.log(action.payload, 'questions are here');
			break;
		default:
			break;
	}
	return {
		...state,
		questions: newArr
	};
};

export default questionReducer;
