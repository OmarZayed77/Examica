import * as questionActions from '../Actions/questionActions';

const initialState = {
	questions: [
		{
			Title: 'What is abstract in C#?',
			Level: 'Intermediate',
			Type: 'MCQ_MultiAnswers',
			Mark: 5,
			isPublic: 'true',
			id: 1
		},
		{
			Title: 'What is abstract in C#?',
			Level: 'Advanced',
			Type: 'MCQ_MultiAnswers',
			Mark: 5,
			isPublic: 'true',
			id: 2
		},
		{
			Title: 'What is abstract in C#?',
			Level: 'Advanced',
			Type: 'MCQ_SingleAnswer',
			Mark: 5,
			isPublic: 'true',
			id: 3
		},
		{
			Title: 'What is abstract in C#?',
			Level: 'Beginner',
			Type: 'TrueOrFalse',
			Mark: 5,
			isPublic: 'true',
			id: 4
		},
		{
			Title: 'What is abstract in C#?',
			Level: 'Beginner',
			Type: 'TrueOrFalse',
			Mark: 5,
			isPublic: 'true',
			id: 5
		},
		{
			Title: 'What is abstract in C#?',
			Level: 'Beginner',
			Type: 'MCQ_SingleAnswer',
			Mark: 5,
			isPublic: 'true',
			id: 6
		},
		{
			Title: 'What is abstract in C#?',
			Level: 'Beginner',
			Type: 'MCQ_SingleAnswer',
			Mark: 5,
			isPublic: 'true',
			id: 7
		}
	]
};

const questionReducer = (state = initialState, action) => {
	let newArr = [...state.questions];
	switch (action.type) {
		case questionActions.ADD_QUESTION:
			newArr.questions.push(action.payload);
			break;
		case questionActions.GET_ALL_QUESTIONS:
			newArr = action.payload;
			break;
		case questionActions.DELETE_QUESTION:
			console.log('ddddddd');
			let questionIndex = newArr.findIndex(q => {
				return q.id === action.id;
			})
			newArr.splice(questionIndex, 1);
			console.log(newArr);
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
