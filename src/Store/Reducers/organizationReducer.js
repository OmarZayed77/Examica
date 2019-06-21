import * as orgActions from '../Actions/organizationActions';

const initialState = {
    all: [],
    currentOrgnaziation: null
};

const organizationReducer = (state = initialState, action) => {
    let newOrg = { ...state.currentOrgnaziation };
    let newArr = [...state.all];
	switch (action.type) {
		case orgActions.ALL:
            newArr = action.payload;
            break;
        case orgActions.CURRENT:
            const index = newArr.findIndex(org => org.id === action.payload);
            if(index > -1) newOrg= newArr[index];
            break;
		default:
			break;
	}
    return {
        all: newArr,
        currentOrgnaziation: newOrg
    };
};

export default organizationReducer;
