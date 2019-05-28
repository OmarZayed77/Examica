import * as examActions from '../Actions/examActions';

const initialState = [];

const examReducer = (state = initialState, action) => {
    let newState = [...state]; 
    switch(action.type)
    {
        case examActions.ADD:
            newState.push(action.payload);
            break;
        default:
            break;
    }   
    return newState;
}

export default examReducer;